"use client";
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import Barcode from "react-barcode"; // Import Barcode library
import html2canvas from "html2canvas"; // To capture the ticket for download
import jsPDF from "jspdf"; // To convert it into a PDF

const Ticket = () => {
  const searchParams = useSearchParams();
  const paymentid = searchParams.get("paymentid");
  const ticketRef = useRef(null); // Ref to capture ticket for PDF download

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      backgroundColor: "#f7f7f7",
    },
    successMessage: {
      textAlign: "center",
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#dff0d8",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      color: "#3c763d",
      fontSize: "18px",
    },
    ticket: {
      display: "flex",
      width: "600px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      padding: "20px",
      border: "2px solid #e0e0e0",
    },

    tickettop: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "600px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      padding: "20px",
      border: "2px solid #e0e0e0",
    },
    leftSection: {
      flex: 2,
      paddingRight: "20px",
      borderRight: "2px dashed #ccc",
    },
    rightSection: {
      flex: 1,
      textAlign: "center",
      paddingLeft: "20px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    subheading: {
      fontSize: "18px",
      marginBottom: "10px",
    },
    details: {
      margin: "15px 0",
      fontSize: "14px",
      color: "#555",
    },
    barcodeContainer: {
      marginTop: "20px",
    },
    ticketInfo: {
      fontSize: "14px",
      color: "#333",
    },
    barcodeText: {
      marginTop: "10px",
      fontSize: "12px",
      color: "#777",
    },
    downloadButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    checkmarkContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    checkmarkCircle: {
      width: "60px",
      height: "60px",
    },
    checkmarkCircleSvg: {
      stroke: "#4caf50",
      strokeWidth: "2.5",
      animation: "circle 0.6s ease-in-out forwards",
    },
    checkmarkCheck: {
      stroke: "#4caf50",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      animation: "checkmark 0.4s ease-in-out 0.6s forwards",
    },
  };

  // Function to download the ticket as a PDF
  const handleDownload = () => {
    const ticket = ticketRef.current;
    html2canvas(ticket).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("ticket.pdf");
    });
  };

  return (
    <div style={styles.container}>
      {/* Success Message */}
      <div style={styles.tickettop}>
        <div style={styles.checkmarkContainer}>
          <div style={styles.checkmarkCircle}>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                style={styles.checkmarkCircleSvg}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                style={styles.checkmarkCheck}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <strong>&nbsp;&nbsp;Payment Successful!</strong>
          <br />
          {/* Your Transaction ID: <strong>{paymentid || "Not Available"}</strong> */}
        </div>
      </div>

      {/* Ticket UI */}
      <div ref={ticketRef} style={styles.ticket}>
        {/* Left side of ticket */}
        <div style={styles.leftSection}>
          <div>
            <div style={styles.heading}>YUGAM 2024</div>
            <div style={styles.subheading}>Event Entry Ticket</div>
            <div style={styles.details}>
              <strong>De Paris</strong>
              <br />
              Cantoment Varanasi, 221002
              <br />
              <br />
              <br />
              For any querries reach us at
              <strong>
                <br />
                <br />
                Call: +91-9451181870 <br />
                Mail: management@avighana.co.in
              </strong>
            </div>
          </div>
        </div>

        {/* Right side of ticket */}
        <div style={styles.rightSection}>
          <div style={styles.ticketInfo}>
            <div>
              DATE: <strong>16-17th Nov 2024</strong>
            </div>
            <div>
              TIME: <strong>10:00 AM - 11:00 PM</strong>
            </div>
          </div>
          <div style={styles.barcodeContainer}>
            <Barcode
              value={paymentid || "0123456789"}
              width={1}
              displayValue={false}
            />
            <div style={styles.barcodeText}>
              <strong>
                TICKET NUMBER
                <br />
              </strong>
              {String(paymentid.split("pay_")[1]).toUpperCase() + "YUG2024" ||
                "0123456789"}
              <br /> <br />
              Please present this ticket at the entry to get the event wrist
              band for access.
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button style={styles.downloadButton} onClick={handleDownload}>
        Download Ticket
      </button>
    </div>
  );
};

export default Ticket;
