import { NextRequest, NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";
import handlebars from "handlebars";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, subject, message, token } = await req.json();
    const year = new Date().getFullYear();

    if (!name || !email || !phone || !message || !subject || !token) {
      return NextResponse.json(
        {
          message: "Required fields missing",
        },
        { status: 400 }
      );
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
                <img src="https://www.bharathatechno.com/logo.png" alt="BharathaTechno" />
              </div>

              <div class="header">Contact Form Submission</div>

              <div class="content">
                <p>A new form has been submitted with the following details:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>

                <div class="message-box">
                  <p><strong>Message:</strong></p>
                  <p>${subject}</p>
                  <p>${message}</p>
                </div>
              </div>

              <div class="footer">
                &copy; ${year} <a href="https://www.bharathatechno.com/" target="_blank">BharathaTechno</a>. All rights reserved.
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
                address: process.env.EMAIL_ADMIN,
                name: "Info",
              },
            },
          ],
          subject: "BharathaTechno: New Enquiry",
          htmlbody: htmlToSend,
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
