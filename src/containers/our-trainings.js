import React from "react";
import { Hero, SmcGroup, Slider, OurWork } from "../components";
import sliderAcademy from "../fixtures/slider-academy.json";
import { handelLazyLoadBackgroundImage } from "../helper/lazyloadBackground";
import { PLACE_HOLDER } from "../constant/routes";
export function OurTrainingContainer() {
  return (
    <OurWork direction="row-reverse" id="gallery">
      <Slider>
        {sliderAcademy.map((item, index) => {
          // Check item type instead of index position
          if (item.type === "video") {
            return (
              <OurWork.VideoHolder key={`video-${index}`} src={item.src} />
            );
          }

          // Handle images
          return (
            <OurWork.ImageHolder
              key={`image-${index}`} // Better key naming
              src={handelLazyLoadBackgroundImage(item.src) || PLACE_HOLDER}
            />
          );
        })}
      </Slider>
      <SmcGroup.InfoHolder width="38.4%">
        <SmcGroup.Title isLong="200px" mobWidth="200px" maxWidth="330px">
          Our trainings
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          Here is our latest trainings sessions and workshops.
        </Hero.Desc>
      </SmcGroup.InfoHolder>
    </OurWork>
  );
}
