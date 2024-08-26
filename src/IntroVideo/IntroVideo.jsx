import React from "react";

function IntroVideo() {
  return (
    <div>
      <video
        class=" object-cover w-full h-screen bg-video "
        muted
        loop
        autoPlay
        preload="metadata"
      >
        <source src="/Image/bg.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default IntroVideo;
