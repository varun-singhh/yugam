"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import tick from "@/assets/images/global/tick.png";
import Image from "next/image";

const Success = () => {
  const searchParams = useSearchParams();
  const paymentid = searchParams.get("paymentid");

  useEffect(() => {
    const createConfetti = () => {
      const container = document.getElementById("confetti-container");
      if (!container) return;

      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 5 + "s";
        confetti.style.backgroundColor = ["#e7801a", "#a83808", "#fff"][
          Math.floor(Math.random() * 3)
        ];
        container.appendChild(confetti);
      }
    };

    createConfetti();

    return () => {
      const container = document.getElementById("confetti-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }

        .success-card {
          background: linear-gradient(276deg, #e7801a 0%, #a83808 100%);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          padding: 2rem;
          margin: 1rem;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          background-color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
          overflow: hidden;
        }

        .payment-details {
          background-color: rgba(0, 0, 0, 0);
          border-radius: 10px;
          padding: 1rem;
          margin-top: 1rem;
        }

        .payment-details-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .payment-details-label {
          flex: 0 0 auto;
          margin-right: 0.5rem;
        }

        .payment-details-value {
          flex: 1 1 auto;
          text-align: right;
          word-break: break-all;
        }

        .btn-black {
          background-color: #000;
          color: #fff;
          border: 2px solid #fff;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .btn-black:hover {
          background-color: #fff;
          color: #000;
        }

        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          background-color: #fff;
          animation: confetti 5s ease-in-out infinite;
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        #confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .barcode-section {
          background-color: white;
          border-radius: 10px;
          padding: 1rem;
          margin-top: 1rem;
          color: #333;
        }

        .barcode-section h3 {
          margin-top: 0;
          color: #333;
        }

        .barcode-section p {
          margin: 5px 0;
        }

        .barcode-section img {
          max-width: 100%;
          height: auto;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .payment-details-row {
            flex-direction: column;
          }

          .payment-details-value {
            text-align: center;
          }

          .success-card {
            padding: 1rem;
          }

          .success-icon {
            width: 50px;
            height: 50px;
          }

          h2 {
            font-size: 1.5rem;
          }

          .payment-details {
            padding: 0.5rem;
          }

          .btn-black {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div id="confetti-container" />

      <div className="container py-3 min-vh-100 d-flex align-items-center">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="success-card text-center position-relative"
              style={{ zIndex: 2 }}
            >
              <div className="success-icon">
                {/* <i className="fas fa-check"></i> */}
                <Image src={tick} alt="tick" width={80} height={80} />
                {/* <img src={tick} alt="tick" /> */}
              </div>

              <h2 className="mb-3 fw-bold">Payment Successful!</h2>

              <div className="payment-details">
                <div className="payment-details-row">
                  <span className="payment-details-label">Payment ID:</span>
                  <strong className="payment-details-value">{paymentid}</strong>
                </div>
                <div className="payment-details-row">
                  <span className="payment-details-label">Status:</span>
                  <strong
                    className="payment-details-value"
                    style={{ color: "#3ad244" }}
                  >
                    Completed
                  </strong>
                </div>
              </div>

              <div className="barcode-section">
                <h3>Your Ticket</h3>
                <p>
                  Please present this ticket at the entry to get the event
                  wristband for access.
                </p>
                <img
                  src={`https://barcode.tec-it.com/barcode.ashx?data=${paymentid}&code=Code128&dpi=96`}
                  alt="Barcode"
                />
              </div>

              <p className="mt-3 mb-3">
                Thank you for booking with Eventia! Your payment has been
                processed successfully. You will receive a confirmation email
                shortly with your ticket details.
              </p>

              <div className="d-grid">
                <Link href="/" className="btn btn-black">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
