import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.BANK_EMAIL,
      pass: process.env.BANK_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.BANK_EMAIL,
    to: process.env.BANK_EMAIL,
    subject: "New Message From Website",
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}
