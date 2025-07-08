import React from "react";
import { Hero } from "../components";
import { CaretCircleRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typewriter from "typewriter-effect";

export function HeroContainer() {
  const navigate = useNavigate();

  return (
    <Hero>
      <Hero.Image src="background" />
      <Hero.Group direction="column">
        <Hero.TitleGroup margin="90px 0 0 0">
          <Hero.Title mobWidth="200px" maxWidth="455px" color="#474747">
            PO Technology Ltd provides <Hero.Line />
          </Hero.Title>

          {/* Typewriter Animation Title */}
          <Hero.Title mobWidth="250px"  color="#01924c">
            <Typewriter
              options={{
                strings: [
                  "Innovative Solutions",
                  "Solar Installations",
                  "Solar Maintenance",
                  "Sells and Services",
                  "DI Printing",
                  "Signage and SignBoards",
                  "24/7 Technical Support",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
            <Hero.Line />
          </Hero.Title>
        </Hero.TitleGroup>

        <Hero.Desc maxWidth="400px">
          Solar energy can save you up to 100% of your electricity or natural
          gas consumption
        </Hero.Desc>

        <Hero.Holder>
          <Hero.Link onClick={() => navigate("/contact-us")}>
            Request Quotation
          </Hero.Link>
          <CaretCircleRight
            color="rgb(204, 204, 204)"
            fontSize="26"
            weight="regular"
          />
        </Hero.Holder>
      </Hero.Group>

      <Hero.WorkerImage>
        <DotLottieReact
          src="https://lottie.host/75a04ed6-6b42-4f0e-acfa-acacf6188c82/nhZT9TIYsX.lottie"
          loop
          autoplay
        />
      </Hero.WorkerImage>
    </Hero>
  );
}