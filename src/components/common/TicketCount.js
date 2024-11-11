"use client";
import React, { useState, useEffect } from "react";
import TicketIcon from "@/components/common/icons/TicketIcon";
import DashIcon from "@/components/common/icons/DashIcon";
import PlusIcon from "@/components/common/icons/PlusIcon";
import WordOpacity from "@/components/common/WordOpacity";
import ButtonCustom from "@/components/common/buttons/ButtonCustom";
import { ticketTypeList } from "@/lib/ticketTypeList";

const TicketCount = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [activeTicket, setActiveTicket] = useState("ticket-form-1");
  const [selectedPrice, setSelectedPrice] = useState(0);
  // const [price, setPrice] = useState(0);

  // Set initial price when component mounts
  useEffect(() => {
    // Find the initial ticket price from ticketTypeList
    const initialTicket = ticketTypeList.find(
      (ticket) => ticket.id === activeTicket
    );
    if (initialTicket) {
      setSelectedPrice(initialTicket.price);
    }
  }, []);

  // Update price when active ticket changes
  useEffect(() => {
    const selectedTicket = ticketTypeList.find(
      (ticket) => ticket.id === activeTicket
    );
    if (selectedTicket) {
      setSelectedPrice(selectedTicket.price);
    }
  }, [activeTicket]);

  // function for increment and decrement ticket counter
  const handleTicketCount = (action) => {
    console.log("ticket selected:" + activeTicket);

    if (action === "plus") {
      setTicketCount(ticketCount + 1);
    } else {
      if (ticketCount === 1) {
        return;
      }
      setTicketCount(ticketCount - 1);
    }
  };

  const totalAmount = selectedPrice * ticketCount;

  return (
    <div className="ticket-content-1">
      <div className="ticket-form-wrapper custom-inner-bg">
        {ticketTypeList.map(({ id, price, type, value }) => (
          <TicketType
            key={id}
            id={id}
            price={price}
            type={type}
            value={value}
            activeTicket={activeTicket}
            setActiveTicket={setActiveTicket}
          />
        ))}
      </div>
      {/* -- ticket-form-wrapper --*/}

      <p className="extra-small fw-semibold d-flex justify-content-lg-end">
        Sales close: Sat, Nov 17th, 03:00 PM (IST).
      </p>
      <div className="d-flex gap-3 justify-content-between">
        <div className="ticket-amounts d-flex align-items-center gap-0 gap-lg-3">
          <span
            className="ticket-icon dash-icon"
            onClick={() => handleTicketCount("minus")}
          >
            <DashIcon height={"16"} width={"16"} />
          </span>
          <span className="input-values">
            <input
              type="text"
              name="input-value"
              defaultValue={ticketCount}
              className="input-number"
            />
          </span>
          <span
            className="ticket-icon plus-icon"
            onClick={() => handleTicketCount("plus")}
          >
            <PlusIcon height={"16"} width={"16"} />
          </span>
        </div>
        <div className="text-lg-end">
          <ButtonCustom
            className={"btn-gradient gap-2"}
            count={ticketCount}
            activeTicket={activeTicket}
            price={selectedPrice}
            amount={totalAmount}
          >
            <TicketIcon height={"25"} width={"25"} />
            Buy Ticket
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default TicketCount;

// ------- Ticket Type List
const TicketType = ({
  id,
  price,
  type,
  value,
  activeTicket,
  setActiveTicket,
}) => {
  return (
    <div
      className={`ticket-form  ${id} ${
        id === activeTicket ? "radio-checked-bg border-transparent" : ""
      } form-check`}
    >
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id={id}
        defaultValue={value}
        onClick={() => setActiveTicket(id)}
      />
      <label
        className="form-check-label d-flex align-items-center justify-content-between"
        htmlFor={id}
      >
        <span className="text-opacity">
          {" "}
          <WordOpacity paragraph={type} />
        </span>
        <span>₹{price}</span>
      </label>
    </div>
  );
};
