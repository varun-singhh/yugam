import React, { useState } from "react";
import SlotCounter from "react-slot-counter";
import ButtonCustom from "@/components/common/buttons/ButtonCustom";
import ContactPlusIcon from "@/components/common/icons/ContactPlusIcon";

const EventDate = ({ styleNum }) => {
  const [seats, setSeats] = useState(800);
  // styleNum 0 from Banner 1
  // styleNum 1 from Banner 2
  // styleNum 2 from Banner 5 and Banner 7

  let prentClass;
  let buttonClass;

  switch (styleNum) {
    case 0:
      prentClass = "event-info-outside event-down-sm";
      buttonClass = "btn-gradient";
      break;
    case 1:
      prentClass = "event-info-outside";
      buttonClass = "btn-gradient";
      break;
    case 2:
      buttonClass = "btn-primary";
      break;
    default:
      break;
  }

  // ----- Change classname define in home page

  return (
    <div className={`event-info custom-inner-bg`}>
      <div className="event-inner">
        <div className="row align-items-center justify-content-between gy-xl-0 gy-4">
          <div className="col-md-4 col-xl-3 col-lg-4">
            <div className="event-content">
              <h2>17th Nov 2024</h2>
              <h4>03:00 PM - 11:00 PM</h4>
            </div>
          </div>
          <div className="col-md-5 col-xl-4 col-lg-5">
            <div className="event-content ms-xxl-5">
              <h2>Sports Ground</h2>
              <h4>Sampurna Nand Sanskrit University</h4>
            </div>
          </div>
          <div className="col-md-3 col-xl-2 col-lg-3">
            <div className="ms-xxl-30">
              <span className="event-odometer-heading fs-2 odometer">
                {/* <SlotCounter
                  startValue={0}
                  value={352}
                  debounceDelay={5000}
                  duration={2}
                  animateOnVisible={{
                    triggerOnce: true,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                /> */}
                {seats}+
              </span>
              <h4>Attending</h4>
            </div>
          </div>
          <div className="col-md-3 col-xxl-2 col-xl-3 col-lg-3">
            <div>
              <ButtonCustom
                className={buttonClass}
                link={"https://yugam-client.vercel.app/"}
              >
                Buy Tickets
              </ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDate;
