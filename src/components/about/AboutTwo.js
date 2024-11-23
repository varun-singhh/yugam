import Image from "next/image";
import React from "react";
import hall_img from "@/assets/images/grand-hall.jpg";
import TicketIcon from "@/components/common/icons/TicketIcon";
import ButtonCustom from "@/components/common/buttons/ButtonCustom";

import ellipse_img from "@/assets/images/home-1/ellipse-1.png";

const AboutTwo = () => {
  return (
    <section className="about-section about-1 pt-50 pt-lg-100 pt-xxl-150">
      <div className="container">
        <div className="row gy-50 gy-lg-0 gx-80 justify-content-lg-between align-items-lg-center">
          <div className="col-lg-4">
            <div>
              <h3 className="display-6 custom-jakarta fw-extra-bold mb-20 mb-lg-30">
                Sampurna Nand Sanskrit University
              </h3>
              <div className="section-title section-title-style-2  mb-0">
                <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">
                  Sports Ground
                </h3>
              </div>
              {/* -- section-title --*/}
              <ButtonCustom
                link={"/#ticket"}
                className={"btn-gradient gap-2 mt-4 mt-lg-40 mt-xxl-50"}
              >
                <span className="buttons-logo">
                  {" "}
                  <TicketIcon height={"25"} width={"35"} />{" "}
                </span>
                Sold Out
              </ButtonCustom>
            </div>
          </div>
          {/* -- col-5 -- */}
          <div className="col-lg-8">
            <div className="position-relative">
              <div className="hall-image">
                <Image src={hall_img} className="img-fluid" alt="img" />
              </div>
              <div className="ellipse-image-1">
                <Image src={ellipse_img} className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
