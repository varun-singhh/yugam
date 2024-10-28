import React from "react";
import PageHeader from "@/components/common/PageHeader";
import Direction from "@/components/direction/Direction";
import Policies from "@/components/policies/policies";

export const metadata = {
  title: "Contact-us",
  description: "Contact us page",
};
const ContactUs = () => {
  return (
    <>
      <PageHeader currentPage={"Policies"} banner={"banner-1 banner-2"} />
      <Policies />
      <Direction styleNum={0} />
    </>
  );
};

export default ContactUs;
