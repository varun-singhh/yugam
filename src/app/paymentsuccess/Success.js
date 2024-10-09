"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Success = () => {
  const searchParams = useSearchParams();
  const paymentid = searchParams.get("paymentid");

  return (
    <div>
      <div role="alert">
        <strong>Payment successful!</strong>
        <span>Your paymentID= {paymentid} has been processed.</span>

        <title>Close</title>
        <path
          d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.293a1 1 0 111.414-1.414L10 8.586l4.293-4.293z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </div>
    </div>
  );
};

export default Success;
