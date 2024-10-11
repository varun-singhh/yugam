"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

const Success = () => {
  const searchParams = useSearchParams();
  const paymentid = searchParams.get("paymentid");

  //   return (
  //     <div>
  //       <div role="alert">
  //         <strong>Payment successful!</strong>
  //         <span>Your paymentID= {paymentid} has been processed.</span>

  //       </div>
  //     </div>
  //   );
  // };

  useEffect(() => {
    // Create animated confetti background
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

    // Cleanup function to remove confetti
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
        }

        .success-icon {
          width: 90px;
          height: 90px;
          background-color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          margin-bottom: 20px;
        }

        .success-icon i {
          color: #e7801a;
          font-size: 45px;
        }

        .payment-details {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 20px;
          margin-top: 20px;
        }

        .btn-black {
          background-color: #000;
          color: #fff;
          border: 2px solid #fff;
          transition: all 0.3s ease;
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
      `}</style>

      <div id="confetti-container" />

      <div className="container py-5 min-vh-100 d-flex align-items-center">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6">
            <div
              className="success-card p-4 p-md-5 text-center position-relative"
              style={{ zIndex: 2 }}
            >
              <div className="success-icon">
                <i className="fas fa-check"></i>
              </div>

              <h2 className="mb-4 fw-bold">Payment Successful!</h2>

              <div className="payment-details">
                <div className="row mb-3">
                  <div className="col-12">
                    <h5 className="mb-3">Payment Details</h5>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Payment ID:</span>
                      <strong>{paymentid}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Status:</span>
                      <strong style={{ color: "#3ad244" }}>Completed</strong>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 mb-4">
                Thank you for booking with Eventia! Your payment has been
                processed successfully. You will receive a confirmation email
                shortly with your ticket details.
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-center">
                <Link href="/" className="btn btn-black btn-lg px-4 me-md-2">
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
