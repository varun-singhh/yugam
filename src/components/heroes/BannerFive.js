import Image from "next/image";
import React from "react";
import BannerSponsor from "@/components/common/BannerSponsor";
import EventDate from "@/components/common/EventDate";
import musicfest_1 from "@/assets/images/musicfest-1.png";

const BannerFive = () => {
  return (
    <section className="hero-section hero-5">
      <div className="container-fluid">
        <div className="hero-wrapper box-hero mx-auto position-relative parallax">
          <div className="container">
            <div className="hero-inner-text position-relative">
              <h1 className="soundscapes no-stroke fs-120 fw-extra-bold mt-2 mb-0 wow slideInUp">
                YUGAM 2024
              </h1>
              <h6 className=""></h6>
              <BannerSponsor
                parentClass={"mb-30 mb-xxl-50 hero-brand-images"}
              />
            </div>
          </div>
          <EventDate styleNum={2} />
        </div>
      </div>
    </section>
  );
};

export default BannerFive;
