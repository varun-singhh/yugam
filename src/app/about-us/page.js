import React from "react";
import PageHeader from "@/components/common/PageHeader";
import AboutOne from "@/components/about/AboutOne";
import Team from "@/components/teams/Team";
import HighlightTwo from "@/components/highlights/HighlightTwo";
import TicketTwo from "@/components/tickets/TicketTwo";
import EventCounterTwo from "@/components/common/eventCounter/EventCounterTwo";
import SponsorDark from "@/components/sponsores/SponsorDark";
import Direction from "@/components/direction/Direction";

export const metadata = {
  title: "About-us",
  description: "About Us Page",
};
const AboutUs = () => {
  return (
    <>
      <PageHeader currentPage={"About us"} banner={"banner-1 banner-2"} />
      <AboutOne />
      <Team />
      <HighlightTwo styleNum={1} />
      <EventCounterTwo />
      {/* <SponsorDark /> */}
      <TicketTwo />
      <Direction styleNum={0} />
    </>
  );
};

export default AboutUs;
