import React from "react";
import { Hero, TrainingPrograms } from "../components";
import { CaretCircleRight } from "phosphor-react";
import { OurProgramsContainer } from "./our-programs";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function TrainingProgramsContainer() {
  const renderLottie = () => {
    return (
      <DotLottieReact
        src="https://lottie.host/ae5cfef1-4e80-45ac-8e3f-6bb100d78093/XtzMR5RBEr.json"
        speed="1"
        loop
        autoplay
      />
    );
  };

  return (
    <TrainingPrograms>
      <Hero.ImageAcademy src="bg" />
      <TrainingPrograms.Inner>
        <TrainingPrograms.Group padding="60px">
          <Hero.TitleGroup>
            <Hero.Title color="var(--color-black)">
              Training programs
              <Hero.Line bg />
            </Hero.Title>
            <Hero.Title color="var(--color-black)" maxWidth="477px">
              for{" "}
              <span style={{ color: "var(--secondry-color)" }}>Youths &</span>
              <Hero.Line bg />
            </Hero.Title>
            <Hero.Title color="var(--secondry-color)" maxWidth="277px">
              Students
              <Hero.Line bg />
            </Hero.Title>
          </Hero.TitleGroup>
          <Hero.Desc maxWidth="400px">
            Providing multiple Training Programs for Youth & students both
            offline and Online Site
          </Hero.Desc>
          <Hero.Holder>
            <Hero.Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwIsb2nYI4_gDYEBNizq6AGuxsJ8EkDsOUg_BWor-IFODA5w/viewform?usp=header"
              target="_blank"
              color="true"
            >
              Register in our summer trainings
            </Hero.Link>
            <CaretCircleRight
              color="rgb(204, 204, 204)"
              fontSize="26"
              weight="regular"
            />
          </Hero.Holder>
        </TrainingPrograms.Group>
        <TrainingPrograms.LottieHolder>
          {renderLottie()}
        </TrainingPrograms.LottieHolder>
      </TrainingPrograms.Inner>
      <TrainingPrograms.Content>
        <OurProgramsContainer />
      </TrainingPrograms.Content>
    </TrainingPrograms>
  );
}
