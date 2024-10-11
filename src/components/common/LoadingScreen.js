// components/common/LoadingScreen.js
"use client";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="spinner"></div>
        <h3>Processing Payment...</h3>
        <p>Please wait while we confirm your payment</p>
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loading-content {
          text-align: center;
          color: white;
          padding: 2rem;
          border-radius: 15px;
          background: linear-gradient(276deg, #e7801a 0%, #a83808 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .spinner {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          border: 5px solid #fff;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        h3 {
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        p {
          margin: 0;
          opacity: 0.9;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
