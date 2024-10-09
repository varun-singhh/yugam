// pages/api/razorpay.js
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export async function POST(req) {
  const amount = 1599;

  const options = {
    amount: amount * 100, // Amount in paisa

    currency: "INR",

    receipt: shortid.generate(),
    payment_capture: "1",
  };
  // console.log(options);

  try {
    const response = await razorpay.orders.create(options);
    console.log("def=", response);

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

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
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
