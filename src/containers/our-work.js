import React from "react";
import { SmcGroup, Slider, Hero, OurWork } from "../components";
import sliderHome from "../fixtures/slider-home.json";
import { handelLazyLoadBackgroundImage } from "../helper/lazyloadBackground";
import { PLACE_HOLDER } from "../constant/routes";


export function OurWorkContainer(props) {
  return (
    <OurWork {...props}>
      <Slider>
        {sliderHome.map(({ src }, index) => {
          if (index === 0) {
            // First item is video
            return (
              <OurWork.VideoHolder
                key={`video-${index}`}
                src="https://res.cloudinary.com/dgbreoalg/video/upload/v1750690873/po-tech_video_fcps6r.mp4"
              />
            );
          }

          // Rest are images
          return (
            <OurWork.ImageHolder
              key={`image-${index}`}
              src={handelLazyLoadBackgroundImage(src) || PLACE_HOLDER}
            />
          );
        })}
      </Slider>
      <SmcGroup.InfoHolder width="38.4%">
        <SmcGroup.Title isLong="200px" mobWidth="200px" maxWidth="330px">
          Our Gallery
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          Here is some screen play of some of our works.
        </Hero.Desc>
      </SmcGroup.InfoHolder>
    </OurWork>
  );
}
