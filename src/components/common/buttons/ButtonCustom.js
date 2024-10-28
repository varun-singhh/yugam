"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "../LoadingScreen";

const ButtonCustom = ({
  link,
  className,
  children,
  count,
  price,
  amount,
  activeTicket,
}) => {
  //afterPayment loading screen
  const [isLoading, setIsLoading] = useState(false);
  //Button when clicked and razorpay is loading
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setIsReady(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const router = useRouter();

  const makePayment = async () => {
    setIsReady(false);
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
    // console.log("price=" + price);

    // console.log("amt=" + amount);

    const data = await fetch("api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount }),
    }).then((t) => t.json());

    const options = {
      key: data.key,
      name: "Avighna Events",
      currency: data.currency,
      amount: data.amount,
      order_id: data.order_id,
      description: "Booking ticket",
      handler: async function (response) {
        try {
          // console.log("abc=", response);
          setIsLoading(true); // Show loading screen when payment completes

          const res = await fetch("api/paymentverify", {
            method: "POST",

            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              count,
              activeTicket,
            }),
          }).then((t) => t.json());

          console.log("response verify==", res);

          if (res?.message == "success") {
            console.log("redirected.......");
            router.push(
              "/paymentsuccess?paymentid=" + response.razorpay_payment_id
            );
          } else {
            setIsLoading(false); // Hide loading if verification fails
            alert("Payment verification failed. Please contact support.");
          }
        } catch (error) {
          setIsLoading(false); // Hide loading if there's an error
          console.error("Payment verification error:", error);
          alert("An error occurred during payment verification.");
        }
      },
      modal: {
        ondismiss: function () {
          setIsLoading(false); // Hide loading if payment modal is dismissed
        },
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      setIsLoading(false);
      alert("Payment failed. Please try again.");
    });
  };
  return (
    <>
      {isLoading && <LoadingScreen />}
      {link ? (
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
          disabled={!isReady}
          className={`btn  d-inline-flex align-items-center  ${className}`}
          aria-label="buttons"
        >
          {isReady ? children : "Loading"}
        </button>
      )}
    </>
  );
};

export default ButtonCustom;
