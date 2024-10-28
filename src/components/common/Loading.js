"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="preloader">
      <script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></script>

      <dotlottie-player
        src="https://lottie.host/b4bdf73d-ebc5-49c1-9b43-ba3976e2511e/EhatMHRwuh.json"
        background="transparent"
        speed="1"
        style={{ width: "50%", height: "50%" }}
        direction="1"
        mode="normal"
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loading;
