import React from "react";
import styled from "styled-components/macro";

export default function SolarVideo() {
  return (
    <Video
      src="https://res.cloudinary.com/dgbreoalg/video/upload/v1749309854/Innovative_Solar_Panels__3D_Animation_Showcasing_Sun-Tracking_Technology_vbmhlp.mp4"
      preload="false"
      controls={true}
      muted={true}
      autoPlay
    />
  );
}

const Video = styled.video`
  width: 560px;
  object-fit: cover;
  height: 300px;
  border-radius: 16px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
