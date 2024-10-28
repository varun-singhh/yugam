import React, { useEffect } from "react";

const InsiderEmbed = () => {
  useEffect(() => {
    // Create the script tag for the embed
    const script = document.createElement("script");
    script.src =
      "https://insider.in/scripts/insider-embed/dist/scripts/insider_embed.min.js";
    script.async = true;

    // Flag to check if insiderEmbed has been initialized
    let initialized = false;

    // Append the script to the body
    document.body.appendChild(script);

    // Initialize the insiderEmbed after the script loads
    script.onload = () => {
      if (!initialized && window.insiderEmbed) {
        window.insiderEmbed.init({
          mountId: "insider-embed",
          eventSlug: "yugam-2024-nov17-2024",
          frameHeight: 400,
          merchantId: "671fe652dfe3d85660a30eea",
        });
        initialized = true; // Set the flag to true to prevent re-initialization
      }
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      initialized = false; // Reset the flag on cleanup
    };
  }, []);

  return (
    <div
      id="insider-embed"
      style={{ position: "relative", height: "900px" }}
    ></div>
  );
};

export default InsiderEmbed;
