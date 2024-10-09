// pages/api/razorpay.js
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
  // key_id: "rzp_test_tPTtL8y2SO52z4",
  // key_secret: "dTo6q3YPa0E18EFDaIXKLZUn",
});

// export default async function handler(req, res) {
//   console.log("method", req.method);
//   res.status(200).json(req.method);

//   if (req.method === "POST") {
export async function POST(req) {
  //   const { amount } = req.body;
  // console.log(req);

  const amount = 1599;

  const options = {
    // amount: (amount * 100).toString(), // Amount in paisa
    amount: amount * 100, // Amount in paisa
    // amount: amount, // Amount in paisa
    currency: "INR",

    receipt: shortid.generate(),
    payment_capture: "1",
  };
  // console.log(options);

  try {
    const response = await razorpay.orders.create(options);
    console.log("def=", response);

    // res.status(200).json(response);
    return NextResponse.json(
      {
        success: true,
        order_id: response.id, // Changed from id to order_id for consistency
        amount: response.amount,
        currency: response.currency,
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    // res.status(500).json({ error: "Internal server error" });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
  //   } else {
  //     res.status(405).json({ error: "Method not allowed" });
  //   }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

// You can add other HTTP methods as needed
export async function GET() {
  return NextResponse.json(
    { message: "This endpoint only accepts POST requests" },
    { status: 405 }
  );
}
