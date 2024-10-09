"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Sample = () => {
  const searchParams = useSearchParams();
  const paymentid = searchParams.get("paymentid");

  return <div>Sample page</div>;
};

export default Sample;
