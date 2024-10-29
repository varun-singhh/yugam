"use client";
import React, { useState } from "react";

import InsiderEmbed from "./Insider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import SlotCounter from "react-slot-counter";

import SectionName from "@/components/common/sectionTitle/SectionName";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import TicketCount from "@/components/common/TicketCount";
import WordOpacity from "@/components/common/WordOpacity";
import SectionTitleTwo from "@/components/common/sectionTitle/SectionTitleTwo";

const TicketOne = ({ styleNum }) => {
  const [seats, setSeats] = useState(478);
  // styleNum 1 from home page 1
  // styleNum 5 from home page 5
  // styleNum 7 from home page 7

  // ----- Change classname define in home page
  let prantClass;
  let subTitleClass;
  let subTitle2;
  switch (styleNum) {
    case 1:
      prantClass = "pb-40 pb-lg-60 pb-xl-80 pt-300 pt-md-150 pt-lg-180";
      break;
    case 5:
      subTitleClass = "custom-roboto primary-text-shadow";
      prantClass = "py-50 py-lg-80 py-lg-100 pb-xxl-130";
      subTitle2 = true;
      break;
    case 7:
      subTitleClass = "primary-text-shadow";
      prantClass = "py-50 py-lg-80 py-lg-100 pb-xxl-130";
      subTitle2 = true;
    default:
      break;
  }

  // ----- Change classname define in home page
  return (
    <section
      id="ticket"
      className={`ticket-section ticket-1 ${prantClass} position-relative parallax`}
    >
      <div className="container">
        <div className="section-title section-title-style-2 mb-30 mb-lg-40 mb-xxl-50 wow fadeInDown">
          <SectionName name={"Ticket"} className={""} />
          {subTitle2 ? (
            <SectionTitleTwo
              title={"Yugam"}
              subTitle={"Admission"}
              titleClass={""}
              subTitleClass={"primary-text-shadow"}
            />
          ) : (
            <SectionTitle
              title={"Yugam"}
              subTitle={"Admission"}
              titleClass={""}
              subTitleClass={subTitleClass}
            />
          )}
        </div>
        <InsiderEmbed />
        {/* -- section-title -- */}
        {/* <div className="ticket-content">
          <div className="d-flex flex-column flex-xl-row gap-50 gap-xl-30 align-items-xl-center">
            <TicketCount />

            <div className="ticket-content-2 position-relative parallax">
              <div className="ticket-content-2-inner">
                <Swiper
                  loop={true}
                  grabCursor={true}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                  }}
                  pagination={{
                    el: ".ticket-swiper-pagination",
                    clickable: true,
                  }}
                  className="swiper ticket-swiper"
                  modules={[Pagination, Autoplay]}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="py-4 ps-30 pe-20">
                      <h2 className="mb-0 d-flex gap-2 gap-lg-3 align-items-center text-white">
                        <span className="fs-100 fw-extra-bold">{seats}</span>
                        <span className="fw-extra-bold fs-1">
                          Tickets Booked
                        </span>
                      </h2>
                      <div className="progress mt-50">
                        <div
                          className="progress-bar"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="p-30">
                      <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start gap-lg-20 mb-5 mb-lg-60">
                        <div className="ticket-images">
                          
                        </div>
                        <h4 className="fw-normal text-white">
                          +
                          <span className="odometer">
                            {" "}
                            <SlotCounter
                              startValue={0}
                              value={seats}
                              debounceDelay={5000}
                              duration={2}
                              animateOnVisible={{
                                triggerOnce: true,
                                rootMargin: "0px 0px -100px 0px",
                              }}
                            />
                          </span>{" "}
                          Attending
                        </h4>
                      </div>
                      <h2 className="display-6 fw-extra-bold text-uppercase text-white mb-0">
                        <span>Secure Your Spot Now</span>
                      </h2>
                    
                    </div>
                  </SwiperSlide>

                  
                  <div className="ticket-swiper-pagination"></div>
                </Swiper>
                
              </div>
              
            </div>
            

            <div className="ticket-content-3 d-flex flex-lg-column gap-3 gap-lg-4">
              <div className="brand custom-inner-bg">
                <h2 className="display-6 fw-bold mb-0">
                  <span className="odometer">
                    <SlotCounter
                      startValue={0}
                      value={10}
                      debounceDelay={5000}
                      duration={2}
                      animateOnVisible={{
                        triggerOnce: true,
                        rootMargin: "0px 0px -100px 0px",
                      }}
                    />
                  </span>
                  +
                </h2>
                <h2 className="fs-1 fw-light mb-0 text-opacity">
                  {" "}
                  <WordOpacity paragraph={"Brands"} />
                </h2>
              </div>
              <div className="brand custom-inner-bg">
                <h2 className="display-6 fw-bold mb-0">
                  <span className="odometer">
                    <SlotCounter
                      startValue={0}
                      value={10}
                      debounceDelay={5000}
                      duration={2}
                      animateOnVisible={{
                        triggerOnce: true,
                        rootMargin: "0px 0px -100px 0px",
                      }}
                    />
                  </span>
                  +
                </h2>
                <h2 className="fs-1 fw-light mb-0 text-opacity">
                  {" "}
                  <WordOpacity paragraph={"Artists"} />
                </h2>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TicketOne;
