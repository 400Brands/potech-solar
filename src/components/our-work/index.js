import React from "react";

import { Container, Inner, ImageHolder, VideoHolder } from "./styles/our-work";

export default function OurWork({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

OurWork.ImageHolder = function OurWorkImageHolder({ ...restProps }) {
  return <ImageHolder {...restProps} />;
};

OurWork.VideoHolder = function OurWorkVideoHolder({ src, ...restProps }) {
  return (
    <VideoHolder {...restProps}>
      <video
        src={src}
        
        muted
        autoPlay={true} // Set to true if you want autoplay
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </VideoHolder>
  );
};