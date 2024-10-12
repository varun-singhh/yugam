import nodemailer from "nodemailer";

export async function POST(req, res) {
  console.log({ req });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { name, email, comment } = await req.json();

  // Replace these credentials with your own email server details
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  try {
    const mailOptions = {
      from: email,
      to: "management@avighana.co.in",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${comment}</p>`,
    };

    await transporter.sendMail(mailOptions);
    NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
