import React from "react";
import TeamCard from "@/components/common/cards/TeamCard";
import SectionDesc from "@/components/common/sectionTitle/SectionDesc";
import SectionName from "@/components/common/sectionTitle/SectionName";
import WordOpacity from "@/components/common/WordOpacity";
import { teamData } from "@/lib/teamData";
import Image from "next/image";
import logo_avighna from "@/assets/images/avighna-logo.png";

const Team = () => {
  return (
    <section
      id="commanders"
      className="commander-section about-1 pt-50 pt-lg-100 pt-xxl-150"
    >
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
          <div className="col-lg-4">
            <div className="section-title section-title-style-2 wow fadeInRight">
              <SectionName
                className={"fs-3 custom-roboto"}
                name={"Behind The yugam"}
              />
              <h2 className="title display-3 fw-extra-bold mb-n2 text-opacity custom-roboto">
                {" "}
                <WordOpacity paragraph={"AVIGHA"} />{" "}
              </h2>
              <h3 className="sub-title display-4 fw-extra-bold primary-text-shadow custom-roboto">
                EVENTS
              </h3>
            </div>
            {/* <!-- section-title --> */}
          </div>
          {/* <div className="col-lg-4">
            <div className="highlights-text">
              <SectionDesc
                className={"custom-jakarta text-lg-end"}
                desc={
                  "Unleash the rhythm with an extraordinary lineup. Get ready for a musical extravaganza that will captivate your senses."
                }
              />
            </div>
          </div> */}
        </div>
        {/* <!-- row --> */}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image src={logo_avighna} width={150} />
        </div>

        <div className="d-flex flex-column gap-50 gap-lg-80 gap-xl-100 mt-20">
          <div className="row gx-30 gy-50 gy-lg-0">
            <div className="">
              <div className="highlights-text text-center">
                <SectionDesc
                  className={"custom-jakarta text-lg-justify"}
                  desc={
                    "At Avighna Events, we are passionate about transforming visions into reality through expert event management. With years of experience in the industry, we specialize in orchestrating unforgettable experiences that resonate with audiences and create lasting memories. As the proud organizers of Yugam 2024, we are dedicated to bringing together the vibrant spirit of culture and music in a spectacular celebration. Our team of seasoned professionals excels in curating and managing concerts, ensuring every detail is meticulously planned and flawlessly executed. From captivating performances to immersive atmospheres, we strive to elevate each event to new heights. At Avighna Events, we understand the intricacies of live entertainment and pride ourselves on our ability to adapt to the unique needs of each occasion. Our commitment to excellence, innovation, and customer satisfaction drives us to create events that not only meet but exceed expectations. Join us as we embark on this exciting journey, and experience the magic of Yugam 2024 like never before!"
                  }
                />
              </div>
            </div>
            {/* {teamData.slice(0, 4).map(({ id, img, name, position }) => (
              <div key={id} className="col-sm-6 col-lg-4 col-xl-3">
                {" "}
                <TeamCard img={img} name={name} position={position} />{" "}
              </div>
            ))} */}
          </div>
          {/* <!-- row --> */}

          {/* <div className="row gx-30 gy-50 gy-lg-0">
            {teamData.slice(3, -1).map(({ id, img, name, position }) => (
              <div key={id} className="col-sm-6 col-lg-4 col-xl-3">
                {" "}
                <TeamCard img={img} name={name} position={position} />{" "}
              </div>
            ))}
          </div> */}
          {/* <!-- row --> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
