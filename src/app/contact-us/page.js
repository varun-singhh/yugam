import React from "react";
import PageHeader from "@/components/common/PageHeader";
import About1 from "@/components/about/AboutOne";

import Ticket1 from "@/components/tickets/TicketTwo";
import Direction from "@/components/direction/Direction";
import Contact from "@/components/contact/Contact";
import ScrollReset from "@/components/common/ScrollReset";
import Policies from "@/components/policies/policies";

export const metadata = {
  title: "Contact-us",
  description: "Contact us page",
};
const ContactUs = () => {
  return (
    <>
      <ScrollReset />
      <PageHeader currentPage={"Contact us"} banner={"banner-1 banner-2"} />
      <About1 />
      <Contact />
      <Ticket1 />
      <Direction styleNum={0} />
      <Policies />
    </>
  );
};

export default ContactUs;
