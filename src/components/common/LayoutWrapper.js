"use client";
import React, { useEffect } from "react";

const LayoutWrapper = ({ children }) => {
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);

    // Prevent body overflow
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    return () => {
      // Cleanup
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, []);

  return <div className="min-h-screen ">{children}</div>;
};

export default LayoutWrapper;
