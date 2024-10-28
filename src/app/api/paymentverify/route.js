import { NextResponse } from "next/server";
import Razorpay from "razorpay";
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

// Function to get ticket description based on ticket ID
function getTicketDescription(activeTicket) {
  switch (activeTicket) {
    case "ticket-form-1":
      return "Full Day Pass";
    case "ticket-form-2":
      return "Day 1 Pass";
    case "ticket-form-3":
      return "Day 2 Pass";
    default:
      return "Error occurred";
  }
}

async function sendConfirmationEmail(paymentDetails) {
  const ticketType = getTicketDescription(paymentDetails.activeTicket);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: paymentDetails.email,
    cc: "solomonsalfie73@gmail.com", //enter mail of admin/management
    subject: "Payment Confirmation Yugam",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <!-- Header -->
      <div style="background: linear-gradient(276deg, #e7801a 0%, #a83808 100%); padding: 20px; text-align: center; color: white;">
        <h1 style="margin: 0;">Payment Confirmation</h1>
      </div>

      <!-- Main Content -->
      <div style="padding: 20px; background-color: #f8f9fa;">
        <!-- Success Message -->
        <div style="background-color: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 4px; color: #155724; margin-bottom: 20px;">
          <h2 style="margin-top: 0;">Payment Successful! ✅</h2>
          <p style="margin-bottom: 0;">Thank you for your reservation at Yugam 2024.</p>
        </div>

<<<<<<< HEAD
        <!-- Payment Details -->
        <div style="background-color: white; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Payment Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0;"><strong>Amount Paid:</strong></td>
              <td style="padding: 8px 0; color: #28a745; font-size: 18px; font-weight: bold;">₹${
                paymentDetails.amount / 100
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Payment ID:</strong></td>
              <td style="padding: 8px 0;">${
                paymentDetails.razorpay_payment_id
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Order ID:</strong></td>
              <td style="padding: 8px 0;"> ${
                paymentDetails.razorpay_order_id
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Payment Method:</strong></td>
              <td style="padding: 8px 0;">${
                paymentDetails.method.charAt(0).toUpperCase() +
                paymentDetails.method.slice(1)
              } </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Ticket Number:</strong></td>
              <td style="padding: 8px 0;">${
                paymentDetails.razorpay_payment_id
                  .split("pay_")[1]
                  .toUpperCase() + "YUG2024"
              } </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Date:</strong></td>
              <td style="padding: 8px 0;">${new Date(
                paymentDetails.created_at * 1000
              ).toLocaleDateString()}</td>
            </tr>
          </table>
        </div>

        <!-- Barcode Section -->
=======
                <!-- Payment Details -->
                <div style="background-color: white; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
                    <h3 style="color: #333; margin-top: 0;">Payment Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0;"><strong>Amount Paid:</strong></td>
                            <td style="padding: 8px 0; color: #28a745; font-size: 18px; font-weight: bold;">₹${
                              paymentDetails.amount / 100
                            }</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Payment ID:</strong></td>
                            <td style="padding: 8px 0;">${
                              paymentDetails.razorpay_payment_id
                            }</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Order ID:</strong></td>
                            <td style="padding: 8px 0;"> ${
                              paymentDetails.razorpay_order_id
                            }</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Payment Method:</strong></td>
                            <td style="padding: 8px 0;">${
                              paymentDetails.method.charAt(0).toUpperCase() +
                              paymentDetails.method.slice(1)
                            } </td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Date:</strong></td>
                            <td style="padding: 8px 0;">${new Date(
                              paymentDetails.created_at * 1000
                            ).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Ticket Type:</strong></td>
                            <td style="padding: 8px 0;">${ticketType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Quantity:</strong></td>
                            <td style="padding: 8px 0;">${
                              paymentDetails.count
                            }</td>
                        </tr>
                    </table>
                </div>

                <!-- Barcode Section -->
>>>>>>> monil/payment_module
        <div style="background-color: white; padding: 20px; border-radius: 4px; margin-bottom: 20px; text-align: center;">
          <h3 style="color: #333; margin-top: 0;">Your Ticket</h3>
          <p style="margin: 5px 0;">Please present this ticket at the entry to get the event wristband for access.</p>
          <img src="https://barcode.tec-it.com/barcode.ashx?data=${
            paymentDetails.razorpay_payment_id
          }&code=Code128&dpi=96" alt="Barcode" style="margin-top: 20px;" />
        </div>
<<<<<<< HEAD
=======

                <!-- Contact Info -->
                <div style="background-color: white; padding: 20px; border-radius: 4px;">
                    <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${
                      paymentDetails.email
                    }</p>
                    <p style="margin: 5px 0;"><strong>Contact:</strong> ${
                      paymentDetails.contact
                    }</p>
                </div>
>>>>>>> monil/payment_module

        <!-- Customer Info -->
        <div style="background-color: white; padding: 20px; border-radius: 4px;">
          <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${
            paymentDetails.email
          }</p>
          <p style="margin: 5px 0;"><strong>Contact:</strong> ${
            paymentDetails.contact
          }</p>
        </div>

<<<<<<< HEAD
        <!-- Support Message -->
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #666;">If you have any questions about your payment, please contact our support team.</p>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #343a40; color: white; text-align: center; padding: 15px; font-size: 12px;">
        <p style="margin: 5px 0;">© 2024 Avighna Events. All rights reserved.</p>
        <p style="margin: 5px 0;">This is an automated email, please do not reply.</p>
      </div>
    </div>
  `,
=======
            <!-- Footer -->
            <div style="background-color: #343a40; color: white; text-align: center; padding: 15px; font-size: 12px;">
                <p style="margin: 5px 0;">© 2024 Avighna Events. All rights reserved.</p>
                <p style="margin: 5px 0;">This is an automated email, please do not reply.</p>
            </div>
        </div>`,
>>>>>>> monil/payment_module
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
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    count,
    activeTicket,
  } = await req.json();

  const paymentDetails = await fetch(
    `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.RAZORPAY_API_KEY}:${process.env.RAZORPAY_APT_SECRET}`
        ).toString("base64")}`,
      },
    }
  ).then((res) => res.json());

  // Verify payment and process with email and contact
  // console.log(paymentDetails);

  const email = paymentDetails.email;
  const contact = paymentDetails.contact;
  const amount = paymentDetails.amount;
  const method = paymentDetails.method;
  const created_at = paymentDetails.created_at;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  // console.log("id==", body);

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // console.log("Payment successfully verified");
    // console.log("email and contact=" + email + " " + contact);
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
    name: "",
    email: email,
    amount: amount,
    created_at: created_at,
    method: method,
    contact: contact,
    razorpay_payment_id,
    razorpay_order_id,
    count,
    activeTicket,
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
