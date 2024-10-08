import React from "react";
import SlotCounter from "react-slot-counter";
import ButtonCustom from "@/components/common/buttons/ButtonCustom";
import ContactPlusIcon from "@/components/common/icons/ContactPlusIcon";

const EventDate = ({ styleNum }) => {
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
    <div className={`event-info custom-inner-bg ${prentClass}`}>
      <div className="event-inner">
        <div className="row align-items-center justify-content-between gy-xl-0 gy-4">
          <div className="col-md-4 col-xl-3 col-lg-4">
            <div className="event-content">
              <h2>6th Nov 2024</h2>
              <h4>10:00 AM - 11:00 PM</h4>
            </div>
          </div>
          <div className="col-md-5 col-xl-4 col-lg-5">
            <div className="event-content ms-xxl-5">
              <h2>Sigra Stadium</h2>
              <h4>Sigra, Near IP Mall, Varanasi</h4>
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
                5000+
              </span>
              <h4>Attending</h4>
            </div>
          </div>
          <div className="col-md-3 col-xxl-2 col-xl-3 col-lg-3">
            <div>
              <ButtonCustom className={buttonClass} link={"#pricing"}>
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
