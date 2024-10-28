import React from "react";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Youtube from "../icons/Youtube";
import Spotify from "../icons/Spotify";
import Image from "next/image";

const LineupCard = ({ cardColor, genere, img, name, socil_link }) => {
  return (
    <div className="lineup-image-wrapper position-relative">
      <div className={`lineup-image ${cardColor}`}>
        <Image src={img} className="img-fluid" alt="lineup-image" />
      </div>
      <div className="lineup-image-hover">
        <p className="author-name">{name}</p>
        <div className="line-up-hover-content">
          <h5 className="fw-medium mb-20">
            Genere : <span className="text-uppercase">{genere}</span>
          </h5>
          {socil_link ? (
            <div className="line-up-icons d-flex align-items-center gap-3 gap-lg-20">
              <a
                href={socil_link[0]?.link}
                className="facebook-icon"
                aria-label="facebook"
              >
                <Facebook height={"20"} width={"20"} />
              </a>
              <a
                href={socil_link[1]?.link}
                className="instagram-icon"
                aria-label="instagram"
              >
                <Instagram />
              </a>
              <a
                href={socil_link[2]?.link}
                className="youtube-icon"
                aria-label="youtube"
              >
                <Youtube />
              </a>
              <a
                href={socil_link[3]?.link}
                className="spotify-icon"
                aria-label="spotify"
              >
                <Spotify />
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* -- lineup-image-hover -- */}
    </div>
  );
};

export default LineupCard;
