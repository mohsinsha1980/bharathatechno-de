import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import ExcelJS from "exceljs";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (token !== process.env.EXPORT_SECRET_TOKEN) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const fromDate = from ? new Date(from) : new Date("1970-01-01");
    const toDate = to ? new Date(to) : new Date();

    const staffRequests = await prisma.staffRequest.findMany({
      where: {
        created_at: {
          gte: fromDate,
          lte: toDate,
        },
      },
      orderBy: { created_at: "desc" },
    });

    const workbook = new ExcelJS.Workbook();
    const ws = workbook.addWorksheet("Staff Requests");

    ws.columns = [
      { header: "ID", key: "id", width: 8 },
      { header: "Full Name", key: "full_name", width: 22 },
      { header: "Company Name", key: "company_name", width: 22 },
      { header: "Business Email", key: "business_email", width: 28 },
      { header: "Phone Number", key: "phone_number", width: 18 },
      { header: "Company Website", key: "company_website", width: 26 },
      { header: "Company Address", key: "company_address", width: 30 },
      { header: "Required Roles", key: "required_roles", width: 30 },
      { header: "# Resources", key: "number_of_resources", width: 14 },
      { header: "Experience Level", key: "experience_level", width: 18 },
      { header: "Skills", key: "skills", width: 30 },
      { header: "Duration", key: "duration", width: 14 },
      { header: "Availability", key: "availability", width: 16 },
      { header: "Budget", key: "budget", width: 14 },
      { header: "Tools", key: "tools", width: 18 },
      {
        header: "Domain Experience",
        key: "project_domain_experience",
        width: 24,
      },
      { header: "Additional Notes", key: "additional_notes", width: 34 },
      { header: "Created At", key: "created_at", width: 20 },
    ];

    const headerRow = ws.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle" };
    ws.views = [{ state: "frozen", ySplit: 1 }];
    ws.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: 1, column: ws.columnCount },
    };

    staffRequests.forEach((r) => {
      ws.addRow({
        id: r.id,
        full_name: r.full_name,
        company_name: r.company_name ?? "",
        business_email: r.business_email,
        phone_number: r.phone_number,
        company_website: r.company_website ?? "",
        company_address: r.company_address ?? "",
        required_roles: r.required_roles,
        number_of_resources: r.number_of_resources,
        experience_level: r.experience_level,
        skills: r.skills ?? "",
        duration: r.duration ?? "",
        availability: r.availability,
        budget: r.budget ?? "",
        tools: r.tools ?? "",
        project_domain_experience: r.project_domain_experience ?? "",
        additional_notes: r.additional_notes ?? "",
        created_at: new Date(r.created_at)
          .toISOString()
          .replace("T", " ")
          .slice(0, 19),
      });
    });

    [
      "company_address",
      "required_roles",
      "skills",
      "project_domain_experience",
      "additional_notes",
    ].forEach((key) => {
      const col = ws.getColumn(key);
      col.alignment = { wrapText: true, vertical: "top" };
    });

    ws.columns.forEach((column) => {
      let max = 10;
      const col = column as ExcelJS.Column;
      if (typeof col.eachCell === "function") {
        col.eachCell({ includeEmpty: true }, (cell: ExcelJS.Cell) => {
          const raw = (cell as ExcelJS.Cell).value;
          const value = raw == null ? "" : String(raw);
          if (value.length > max) max = Math.min(value.length, 60);
        });
      }
      column.width = Math.max(column.width ?? 10, max + 2);
    });

    const filenameParts = [
      "export_staff_requests",
      from ? from.replace(/[:T]/g, "-").slice(0, 10) : "from-epoch",
      "to",
      to
        ? to.replace(/[:T]/g, "-").slice(0, 10)
        : new Date().toISOString().slice(0, 10),
    ];
    const filename = `${filenameParts.join("_")}.xlsx`;

    const buffer = await workbook.xlsx.writeBuffer();
    const nodeBuffer = Buffer.from(buffer as ArrayBuffer);
    return new NextResponse(nodeBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
