// pages/api/razorpay.js
import Razorpay from 'razorpay';
import shortid from 'shortid';

const razorpay = new Razorpay({
  key_id: 'rzp_test_tPTtL8y2SO52z4',
  key_secret: 'dTo6q3YPa0E18EFDaIXKLZUn',
});

export default async function handler(req, res) {
  const amount = 100; // Amount in paisa (e.g., INR 1 = 100 paisa)
  const currency = 'INR';
  const receipt = shortid.generate();
  const payment_capture = 1;

  const options = {
    amount: amount.toString(),
    currency,
    receipt,
    payment_capture,
    notes: {},
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}