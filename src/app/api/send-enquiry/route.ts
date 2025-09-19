import { NextRequest, NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";
import handlebars from "handlebars";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const token = formData.get("token") as string;
    const file = formData.get("file") as File | null;
    const picture = formData.get("picture") as File | null;
    const year = new Date().getFullYear();

    if (!name || !email || !phone || !message || !subject || !token) {
      return NextResponse.json(
        {
          message: "Required fields missing",
        },
        { status: 400 }
      );
    }

    // Validate file types and sizes
    if (file && file.size > 0) {
      if (file.type !== "application/pdf") {
        return NextResponse.json(
          {
            message: "Only PDF files are allowed for documents",
          },
          { status: 400 }
        );
      }
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        return NextResponse.json(
          {
            message: "PDF file must be under 10MB",
          },
          { status: 400 }
        );
      }
    }

    if (picture && picture.size > 0) {
      if (!picture.type.startsWith("image/")) {
        return NextResponse.json(
          {
            message: "Only image files are allowed for pictures",
          },
          { status: 400 }
        );
      }
      if (picture.size > 5 * 1024 * 1024) {
        // 5MB limit
        return NextResponse.json(
          {
            message: "Image file must be under 5MB",
          },
          { status: 400 }
        );
      }
    }

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

    /* eslint-disable prefer-const */
    let attachments = [];

    if (file && file.size > 0) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        content: fileBuffer.toString("base64"),
        mime_type: file.type || "application/pdf",
        name: file.name,
      });
    }

    if (picture && picture.size > 0) {
      const pictureBuffer = Buffer.from(await picture.arrayBuffer());
      attachments.push({
        content: pictureBuffer.toString("base64"),
        mime_type: picture.type,
        name: picture.name,
      });
    }

    const templateFile = `
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>BharathaTechno: Contact Us</title>
            <style>
              body {
                font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #333;
              }

              .container {
                max-width: 600px;
                margin: 30px auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
              }

              .logo {
                text-align: center;
                margin-bottom: 25px;
              }

              .logo img {
                max-height: 60px;
              }

              .header {
                text-align: center;
                font-size: 22px;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 20px;
              }

              .content {
                font-size: 16px;
                line-height: 1.6;
              }

              .content p {
                margin: 10px 0;
              }

              .message-box {
                background-color: #f8f8f8;
                border-left: 4px solid #3498db;
                padding: 12px;
                border-radius: 4px;
                margin-top: 10px;
              }

              .footer {
                text-align: center;
                font-size: 12px;
                color: #777;
                margin-top: 30px;
              }

              .footer a {
                color: #777;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo">
                <img src="https://www.bharathatechno.de/logo.png" alt="BharathaTechno" />
              </div>

              <div class="header">Contact Form Submission</div>

              <div class="content">
                <p>A new form has been submitted with the following details:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>

                <div class="message-box">
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                </div>
                
                ${
                  attachments.length > 0
                    ? `
                <div class="message-box" style="background-color: #e8f5e8; border-left-color: #28a745;">
                  <p><strong>Attachments:</strong></p>
                  <ul>
                    ${attachments
                      .map(
                        (att) =>
                          `<li>${att.name} (${(
                            (att.content.length * 0.75) /
                            1024 /
                            1024
                          ).toFixed(2)} MB)</li>`
                      )
                      .join("")}
                  </ul>
                </div>
                `
                    : ""
                }
              </div>

              <div class="footer">
                &copy; ${year} <a href="https://www.bharathatechno.de/" target="_blank">BharathaTechno</a>. All rights reserved.
              </div>
            </div>
          </body>
        </html>
`;

    const template = handlebars.compile(templateFile);

    const htmlToSend = template({
      name,
      phone,
      email,
      subject,
      message,
      year,
    });

    const url = process.env.MAIL_URL;
    const mailToken = process.env.MAIL_TOKEN;

    const client = new SendMailClient({
      url,
      token: mailToken,
    });

    const sendEmail = async () => {
      try {
        await client.sendMail({
          from: {
            address: process.env.EMAIL_ADMIN,
            name: "noreply",
          },
          to: [
            {
              email_address: {
                address: "rashee@bharathatechno.com",
                name: "Info",
              },
            },
          ],
          bcc: [
            {
              email_address: {
                address: "rashchop2001@gmail.com",
                name: "BT",
              },
            },
          ],
          subject: "BharathaTechno: New Enquiry",
          htmlbody: htmlToSend,
          attachments,
        });
      } catch (mailErr) {
        return NextResponse.json({
          status: 500,
          message: "Internal Server Error!, ",
          mailErr,
        });
      }
    };
    await sendEmail();
    return NextResponse.json({
      status: 200,
      message: "Enquiry mail sent successfully!",
      data: { name, phone, email, subject, message },
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error!",
    });
  }
}
