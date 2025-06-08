import React, { useState, useEffect } from "react";
import { OurProgrames, SmcGroup, Hero } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategotyData from "../data/courses-data.json";
import { Link } from "react-router-dom";
import { responsive } from "../constant/responsive";
import { handelLazyLoadBackgroundImage } from "../helper/lazyloadBackground";
import { PLACE_HOLDER } from "../constant/routes";

export function OurProgramsContainer() {
  const [cursor, setCursor] = useState("grab");
  const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
  const [clientYonMouseDown, setClientYonMouseDown] = useState(null);

  useEffect(() => {
    console.log({ cursor });
  }, [cursor]);

  function handleOnMouseDown(e) {
    setClientXonMouseDown(e.clientX);
    setClientYonMouseDown(e.clientY);
    e.preventDefault();
  }

  function handleOnClick(e) {
    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
      e.preventDefault();
    }
  }

  return (
    <OurProgrames>
      <SmcGroup.Title maxWidth="">
        Our Training Category
        <Hero.Line bg />
      </SmcGroup.Title>
      <OurProgrames.SliderHolder
        onMouseDown={() => setCursor("grabbing")}
        onMouseUp={() => setCursor("grab")}
        cursor={cursor}
      >
        <Carousel
          removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
          responsive={responsive}
          pauseOnHover={false} // Changed to false to keep moving even on hover
          transitionDuration={500} // Increased for smoother transitions
          minimumTouchDrag={20}
          autoPlay={true}
          autoPlaySpeed={2000} // Added: Controls speed of auto-advance (2 seconds)
          infinite={true} // Added: Makes carousel loop infinitely
          focusOnSelect={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
          // Additional props for better continuous movement
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          shouldResetAutoplay={true} // Resets autoplay after user interaction
        >
          {CategotyData.map((categ) => (
            <Link
              draggable="false"
              key={categ.name}
              to={`/academy/${categ.name}`}
            >
              <OurProgrames.Card
                src={handelLazyLoadBackgroundImage(categ.src) || PLACE_HOLDER}
                onMouseDown={(e) => handleOnMouseDown(e)}
                onClick={(e) => {
                  handleOnClick(e);
                }}
              >
                <OurProgrames.Frame>
                  <OurProgrames.CourseName>
                    {categ.category}
                  </OurProgrames.CourseName>
                  <OurProgrames.TrainingCourses>
                    {categ.courses.length} Training tracks
                  </OurProgrames.TrainingCourses>
                </OurProgrames.Frame>
              </OurProgrames.Card>
            </Link>
          ))}
        </Carousel>
      </OurProgrames.SliderHolder>
    </OurProgrames>
  );
}
