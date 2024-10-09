import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";
import crypto from "crypto";
import nodemailer from "nodemailer";

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, // Use App Password for Gmail
  },
});

async function sendConfirmationEmail(paymentDetails) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: paymentDetails.email,
    subject: "Payment Confirmation",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Payment Successful!</h2>
          <p>Dear ${paymentDetails.name},</p>
          <p>Thank you for your payment. Here are your transaction details:</p>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p><strong>Amount Paid:</strong> ₹${paymentDetails.amount / 100}</p>
            <p><strong>Payment ID:</strong> ${
              paymentDetails.razorpay_payment_id
            }</p>
            <p><strong>Order ID:</strong> ${
              paymentDetails.razorpay_order_id
            }</p>
          </div>
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <p>Best regards,<br>Your Company Name</p>
        </div>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
}

export const dynamic = "force-dynamic";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export async function POST(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("id==", body);

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // console.log(Payment);

    //   await dbConnect()

    //    await Payment.create({
    //      razorpay_order_id,
    //      razorpay_payment_id,
    //      razorpay_signature,
    //    });
    console.log("Payment successfully verified");

    // return NextResponse.redirect(new URL("/home-2", req.url));
  } else {
    return NextResponse.json(
      {
        message: "fail",
      },
      {
        status: 400,
      }
    );
  }

  // Send confirmation email
  const emailSent = await sendConfirmationEmail({
    name: "Monil",
    email: "naughty.taanu@gmail.com",
    amount: 1599,
    razorpay_payment_id,
    razorpay_order_id,
  });
  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
}
