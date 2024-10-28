"use client";

import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [cta, setCtaText] = useState("Submit");

  async function onSubmit(e) {
    e.preventDefault();
    console.log({ email, comment });
    setCtaText("Sending mail...");
    const apiUrl = "/api/mailme";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstName + lastName,
          email: email,
          comment: comment,
        }),
      }).then(() => {
        setFirstName("");
        setLastName("");
        setComment("");
        setCtaText("Email Sent!");
        setTimeout(() => {
          setCtaText("Reach out");
        }, 3000);
      });
    } catch (error) {
      setCtaText("Error occured. Try again");
      console.error("Error sending email:", error.message);
    }
  }
  return (
    <section
      className="contact-section contact-page pt-70 pt-lg-120 pt-xxl-150"
      id="contactForm"
    >
      <div className="container">
        <div className="row gy-20 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
          <div className="col-lg-5">
            <div className="section-title section-title-style-2 wow fadeInRight">
              <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                {" "}
                <span className="straight-line"></span>Contact
              </span>
              <h2 className="title display-3 fw-extra-bold mb-n2 text-opacity">
                Avighna
              </h2>
              <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow">
                Get In Touch
              </h3>
            </div>
            {/* -- section-title -- */}
          </div>
          <div className="col-lg-5">
            <div className="highlights-text wow fadeInLeft">
              <p className="custom-roboto custom-font-style-1 text-lg-end mb-2">
                Immerse in mesmerizing performances,vibrant soundscapes,and
                interactive art at our music extravaganza. Experience a festival
                atmosphere like no other, where unforgettable moments.
              </p>
            </div>
          </div>
        </div>
        {/* -- row -- */}
        <div className="contact-us-form">
          <form onSubmit={onSubmit}>
            <div className="row gx-5 gy-4 gy-lg-5">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name *"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name *"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Your Comment"
                  id="form-textarea"
                  style={{ height: "100px" }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-gradient d-inline-flex"
                  aria-label="buttons"
                >
                  {cta}
                </button>
              </div>
            </div>
            {/* -- row -- */}
          </form>
        </div>
        {/* -- contact-us-form --*/}
      </div>
      {/* -- container -- */}
    </section>
  );
};

export default Contact;
