"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const ButtonOutline = ({ link, className, children, price }) => {
  const router = useRouter();
  console.log("price= " + price);

  const makePayment = async () => {
    const data = await fetch("api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1234 }),
    }).then((t) => t.json());

    const options = {
      key: data.key,
      name: "Your Company",
      currency: data.currency,
      amount: data.amount,
      order_id: data.order_id,
      description: "Test Transaction",
      handler: async function (response) {
        console.log("abc=", response);

        const res = await fetch("api/paymentverify", {
          method: "POST",
          // headers: {
          //   // Authorization: 'YOUR_AUTH_HERE'
          // },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        }).then((t) => t.json());

        // const res = await veri;

        console.log("response verify==", res);

        if (res?.message == "success") {
          console.log("redirected.......");
          router.push(
            "/paymentsuccess?paymentid=" + response.razorpay_payment_id
          );
          // router.push("/paymentsuccess");
          // router.push("/home-2");
        }

        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        // name: "",
        // email: "",
        // contact: "",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again.");
    });
  };
  return link ? (
    <Link
      href={link}
      className={`btn  d-inline-flex align-items-center  ${className}`}
      aria-label="buttons"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={makePayment}
      className={`btn  d-inline-flex align-items-center  ${className}`}
      aria-label="buttons"
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
