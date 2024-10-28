"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RoundText from "@/components/common/RoundText";
import VideoIcon from "@/components/common/icons/VideoIcon";
import about_img from "@/assets/images/hero-5-bg.jpg";
import ellipse_1 from "@/assets/images/home-1/ellipse-1.png";
import EvModal from "../EvModal";

const AboutCard = () => {
  const [currentId, setCurrentId] = useState(0);
  const [type, setType] = useState("video");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // ------- Video modal close
  const handleOpenModal = (index, type) => {
    setModalIsOpen(true);
    setCurrentId(index);
    setType(type);
  };
  // ------- Video modal close
  return (
    <>
      <div className="about-content-wrapper position-relative wow fadeInLeft">
        <div className="about-image-1 position-relative">
          <div className="about-image-wrapper">
            <Image src={about_img} className="img-fluid" alt="img" />
          </div>
          <div
            onClick={() => handleOpenModal(1, "video")}
            className="video-popup video-popup-center position-absolute video-popup-link"
          >
            <div className="circle-wrapper">
              <div className="rotate-text2 text-uppercase">
                <RoundText
                  style={""}
                  text={"Where Melodies Unite Hearts Yugam-"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-image-2"></div>
        <div className="ellipse-image-1">
          <Image src={ellipse_1} className="img-fluid" alt="img" />
        </div>
      </div>
      {modalIsOpen && (
        <EvModal
          setModalIsOpen={setModalIsOpen}
          currentId={currentId}
          type={type}
          url={"https://www.instagram.com/yugam.live/reel/DBA4g4atz6x/"}
        />
      )}
    </>
  );
};

export default AboutCard;
