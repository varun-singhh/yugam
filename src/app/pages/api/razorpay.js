// pages/api/razorpay.js
import Razorpay from "razorpay";
import shortid from "shortid";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount } = req.body;

    const options = {
      amount: (amount * 100).toString(), // Amount in paisa
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: "1",
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
