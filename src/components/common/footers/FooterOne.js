import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/global/logo.png";
import logo_dark from "@/assets/images/global/logo-dark.png";

const FooterOne = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-section footer-1 py-lg-50 py-40 mt-auto">
      <div className="container">
        <div className="row gy-lg-0 gy-10 justify-content-between align-items-center text-center text-lg-start">
          <div className="col-lg-4 order-3 order-lg-1">
            <p className="mb-0 footer-nav">
              &copy; {year}{" "}
              <Link
                href="https://Yugam.net/"
                className="text-decoration-none"
                target="_blank"
              >
                Yugam
              </Link>
              . All rights Reserved.
            </p>
          </div>
          <div className="col-lg-3 order-1 order-lg-2">
            {/* <Link
              className="navbar-brand d-flex justify-content-center"
              href="/home-1/"
              aria-label="nav-brands"
            >
              <Image src={logo} className="logo-light" alt="logo" />
              <Image src={logo_dark} className="logo-dark" alt="logo" />
            </Link> */}
          </div>
          <div className="col-lg-5 order-2 order-lg-3">
            <ul className="footer-nav list-unstyled d-flex justify-content-center justify-content-lg-end gap-30 mb-0 custom-font-style-1">
              <li className="nav-item">
                <Link
                  href="/#line-up-cultural"
                  className="nav-link"
                  aria-label="nav-links"
                >
                  Line-Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#yugam-headline"
                  className="nav-link"
                  aria-label="nav-links"
                >
                  Latest News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact-us#contactForm"
                  className="nav-link"
                  aria-label="nav-links"
                >
                  Become a Sponsor
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/venue" className="nav-link" aria-label="nav-links">
                  Venue
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#schedule"
                  className="nav-link"
                  aria-label="nav-links"
                >
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact-us"
                  className="nav-link"
                  aria-label="nav-links"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* -- row -- */}
      </div>
      {/* -- container --*/}
    </footer>
  );
};

export default FooterOne;
