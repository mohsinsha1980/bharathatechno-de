import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";
import handlebars from "handlebars";
import fs from "node:fs/promises";
import path from "node:path";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const info = {
      full_name: body.companyInfo?.fullName || "",
      company_name: body.companyInfo?.companyName || "",
      business_email: body.companyInfo?.email || "",
      phone_number: body.companyInfo?.phone || "",
      company_website: body.companyInfo?.website || "",
      company_address: body.companyInfo?.address || "",

      roles:
        body.staffRequire?.roles?.length > 0
          ? body.staffRequire.roles
          : body.projectOverview?.roles || [],
      number_of_resources:
        body.staffRequire?.numberOfResources ||
        body.projectOverview?.numberOfResources ||
        0,
      experience_level:
        body.staffRequire?.experienceLevel ||
        body.projectOverview?.experienceLevel ||
        "",
      skills:
        body.staffRequire?.skills
          ? body.staffRequire.skills
          : body.projectOverview?.skills || "",
      duration:
        body.staffRequire?.duration || body.projectOverview?.duration || "",
      availability:
        body.projectDetails?.availability ||
        body.projectOverview?.availability ||
        "",
      budget: body.projectDetails?.budget || body.projectOverview?.budget || "",

      tools: body.projectDetails?.toolsAndPlatforms || "",
      project_domain_experience:
        body.projectDetails?.requiredDomainExperience || "",
      additional_notes: body.projectDetails?.additionalNotes || "",

      token: body.token,
    };

    const {
      full_name,
      company_name,
      business_email,
      phone_number,
      company_website,
      company_address,
      roles,
      number_of_resources,
      experience_level,
      skills,
      duration,
      availability,
      budget,
      tools,
      project_domain_experience,
      additional_notes,
      token,
    } = info;

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success) {
      return NextResponse.json({
        message: "Failed reCAPTCHA verification. Are you a robot?",
        status: 400,
      });
    }

    if (
      !full_name ||
      !business_email ||
      !phone_number ||
      !availability ||
      !experience_level ||
      number_of_resources === undefined
    ) {
      return NextResponse.json(
        {
          message:
            "Required fields missing, required: full_name, business_email, phone_number, availability, experience_level, number_of_resources",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(business_email))) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const rawPhone = String(phone_number).trim();
    const digitsOnlyPhone = rawPhone.replace(/\D/g, "");
    if (!(digitsOnlyPhone.length > 10 && digitsOnlyPhone.length < 14)) {
      return NextResponse.json(
        { message: "Invalid phone number. Must contain 11 to 13 digits" },
        { status: 400 }
      );
    }

    const fullNameRegex = /^[\p{L}\s'\-]+$/u;
    if (!fullNameRegex.test(String(full_name))) {
      return NextResponse.json(
        {
          message:
            "Full name may only contain letters, spaces, apostrophes, and hyphens",
        },
        { status: 400 }
      );
    }

    const required_roles = Array.isArray(roles)
      ? roles.join(",")
      : typeof roles === "string"
      ? roles
      : "";

    const parsedNumberOfResources =
      typeof number_of_resources === "string"
        ? parseInt(number_of_resources, 10)
        : Number(number_of_resources);

    if (!Number.isFinite(parsedNumberOfResources)) {
      return NextResponse.json(
        { message: "Invalid number_of_resources" },
        { status: 400 }
      );
    }

    const staffRequest = await prisma.staffRequest.create({
      data: {
        full_name,
        company_name: company_name ?? null,
        business_email,
        phone_number,
        company_website: company_website ?? null,
        company_address: company_address ?? null,
        required_roles,
        number_of_resources: parsedNumberOfResources,
        experience_level,
        skills: skills || "",
        duration: duration ?? null,
        availability,
        budget: budget ?? null,
        tools: tools ?? null,
        project_domain_experience: project_domain_experience ?? null,
        additional_notes: additional_notes ?? null,
      },
    });

    const year = new Date().getFullYear();
    const templatePath = path.join(
      process.cwd(),
      "src",
      "util",
      "email-template",
      "staff-augmentation.html"
    );
    const templateSource = await fs.readFile(templatePath, "utf8");
    const template = handlebars.compile(templateSource);
    const htmlbody = template({
      id: staffRequest.id,
      full_name,
      business_email,
      phone_number,
      company_name: company_name ?? "-",
      company_website: company_website ?? "-",
      company_address: company_address ?? "-",
      required_roles,
      number_of_resources: parsedNumberOfResources,
      experience_level,
      availability,
      duration: duration ?? "-",
      budget: budget ?? "-",
      skills: skills ?? "-",
      project_domain_experience: project_domain_experience ?? "-",
      additional_notes: additional_notes ?? "-",
      year,
      created_at: new Date().toISOString().replace("T", " ").slice(0, 19),
    });

    const client = new SendMailClient({
      url: process.env.MAIL_URL,
      token: process.env.MAIL_TOKEN,
    });

    try {
      await client.sendMail({
        from: { address: process.env.EMAIL_FROM, name: "noreply" },
        to: [
          {
            email_address: { address: "rashchop2001@gmail.com", name: "Info" },
          },
        ],
        bcc: [{ email_address: { address: process.env.EMAIL, name: "BT" } }],
        subject: "BharathaTechno: New Staff Augmentation Request",
        htmlbody,
      });
    } catch (mailErr) {
      // Do not fail the request if email fails; just report
      console.error("Mail error:", mailErr);
    }

    return NextResponse.json(
      { message: "Form submitted successfully", id: staffRequest.id },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error:
          typeof error === "object" && error !== null && "message" in error
            ? String((error as { message?: string }).message)
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}
