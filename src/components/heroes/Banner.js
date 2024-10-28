"use client";

import React, { useState, useEffect } from "react";
import BannerSponsor from "@/components/common/BannerSponsor";
import EventDate from "@/components/common/EventDate";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const backgrounds = [
    "/images/hero-01.jpg",
    "/images/hero-4.jpg",
    "/images/hero-22.jpg",
    "/images/hero-1.jpg",
    "/images/hero-102.jpg",
    "/images/hero-5-bg.jpg",
  ];

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      const next = (currentSlide + 1) % backgrounds.length;
      goToSlide(next);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Background Carousel */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            style={{
              transition: "opacity 1000ms ease-in-out",
              opacity: currentSlide === index ? 1 : 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            <img
              src={bg}
              alt={`Slide ${index + 1}`}
              className="w-100 h-100 object-fit-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
              style={{
                transition: "opacity 1000ms ease-in-out",
                opacity: currentSlide === index ? 0.5 : 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container-fluid position-relative" style={{ zIndex: 10 }}>
        <div
          className="hero-wrapper box-hero mx-auto position-relative parallax"
          style={{
            padding: "200px 0 40px 0",
          }}
        >
          <div className="container">
            <div className="hero-inner-text position-relative text-left pt-5">
              <BannerSponsor parentClass="mb-50 mb-xxl-50 hero-brand-images" />
              <h1 className="soundscapes no-stroke fs-120 fw-extra-bold mt-36 mb-0 wow slideInUp">
                YUGAM 2024
              </h1>

              <EventDate styleNum={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div
        className="position-absolute start-50 bottom-0 translate-middle-x d-flex gap-2"
        style={{ zIndex: 20, bottom: "2rem" }}
      >
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`btn btn-link p-0 border-0 ${
              currentSlide === index ? "opacity-100" : "opacity-50"
            }`}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: "0.75rem",
              height: "0.75rem",
              borderRadius: "50%",
              backgroundColor: "white",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        className="position-absolute start-0 top-50 translate-middle-y btn btn-link text-white opacity-75 ms-3"
        style={{ zIndex: 20 }}
        onClick={() =>
          goToSlide(
            (currentSlide - 1 + backgrounds.length) % backgrounds.length
          )
        }
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <div className="bg-dark bg-opacity-25 rounded-circle p-2">
          <i className="bi bi-chevron-left fs-4"></i>
        </div>
      </button>
      <button
        className="position-absolute end-0 top-50 translate-middle-y btn btn-link text-white opacity-75 me-3"
        style={{ zIndex: 20 }}
        onClick={() => goToSlide((currentSlide + 1) % backgrounds.length)}
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <div className="bg-dark bg-opacity-25 rounded-circle p-2">
          <i className="bi bi-chevron-right fs-4"></i>
        </div>
      </button>

      <style jsx>{`
        .mobile-spacing {
          display: flex;
          flex-direction: column;
          align-items: left;
        }

        .mobile-sponsor {
          margin-bottom: 0 !important;
        }

        @media (max-width: 1400px) {
          .hero-wrapper {
            padding: 150px 0 60px 0 !important;
          }
        }
        @media (max-width: 1200px) {
          .hero-wrapper {
            padding: 130px 0 50px 0 !important;
          }
        }
        @media (max-width: 992px) {
          .hero-wrapper {
            max-width: 100%;
            padding: 220px 0 40px 0 !important;
          }
        }
        @media (max-width: 768px) {
          .hero-wrapper {
            max-width: 100%;
            padding: 120px 0 20px 0 !important;
          }
          .hero-inner-text {
            padding-top: 3rem !important;
          }
          .mobile-spacing {
            margin-top: 1rem;
            gap: 1rem;
          }
          .mobile-sponsor {
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          :global(.event-info) {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          :global(.hero-brand-images) {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
          :global(.mb-30) {
            margin-bottom: 0 !important;
          }
          :global(.mb-xxl-50) {
            margin-bottom: 0 !important;
          }
        }
        @media (max-width: 576px) {
          .hero-wrapper {
            padding: 140px 0 20px 0 !important;
          }
          .hero-inner-text {
            padding-top: 4rem !important;
          }
          .mobile-spacing {
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
