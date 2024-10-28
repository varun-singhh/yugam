import React from "react";
import PageHeader from "@/components/common/PageHeader";
import AboutTwo from "@/components/about/AboutTwo";
import ConferenceHall from "@/components/conferenceHall/ConferenceHall";
import HighlightTwo from "@/components/highlights/HighlightTwo";
import EventCounterTwo from "@/components/common/eventCounter/EventCounterTwo";
import TicketTwo from "@/components/tickets/TicketTwo";
import Direction from "@/components/direction/Direction";

export const metadata = {
  title: "Venue",
  description: "Venue of event",
};

const Venue = () => {
  return (
    <>
      <PageHeader currentPage={"Venue"} banner={"banner-1 banner-3"} />
      <AboutTwo />
      {/* <ConferenceHall /> */}
      <HighlightTwo />
      <EventCounterTwo />
      <TicketTwo />
      <Direction styleNum={0} />
    </>
  );
};

export default Venue;
