import React from "react";
import { About, Hero, Form } from "../components";
import { Question, Target, Eye } from "phosphor-react";
import { FqsContainer } from "../containers/fqs";
import { HeaderContainer } from "../containers/header";
export default function AboutUs() {
  return (
    <>
      <HeaderContainer aria-label="header-group" />
      <About>
        <Form.Group padding="40px 0 0 0" alignItems="center" gap="8px">
          <Form.PageName>
            About Us
            <Hero.Line />
          </Form.PageName>
          <Form.Text>Who are we? Our Mission & Vision?</Form.Text>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_xwipaalv.json"
            background="transparent"
            speed="1"
            style={{
              width: "300px",
              height: "300px",
            }}
            loop
            autoplay
          />
        </Form.Group>
        <About.CardsHolder>
          <About.Card>
            <About.Round>
              <Question size="26px" color="var(--color-hover)" />
            </About.Round>
            <About.CardTitle>Who are we?</About.CardTitle>
            <About.CardDesc>
              PO Technology is a forward-thinking engineering firm committed to
              innovation, creativity, and practical solutions in the fields of
              electronics, robotics, mechanical systems, automation,
              electric vehicles, and clean energy. Founded by passionate
              technologists, we specialize in research, design, construction,
              manufacturing, training, and consulting. 
            </About.CardDesc>
          </About.Card>
          <About.Card>
            <About.Round>
              <Target size="26px" color="var(--color-hover)" />
            </About.Round>
            <About.CardTitle>Our Mission</About.CardTitle>
            <About.CardDesc>
              Our mission is to engineer meaningful innovations that improve
              lives, empower industries, and promote technological independence.
              Through research, hands-on training, and the development of
              practical devices and systems, we aim to contribute to national
              development while raising the next generation of creative
              engineers and problem-solvers.
            </About.CardDesc>
          </About.Card>
          <About.Card>
            <About.Round>
              <Eye size="26px" color="var(--color-hover)" />
            </About.Round>
            <About.CardTitle> Our Vision</About.CardTitle>
            <About.CardDesc>
              Our vision is to become a globally recognized center of excellence
              in engineering and innovation—leading the charge in Africa’s
              technological advancement. We aspire to be a hub where
              groundbreaking ideas are developed into tangible products, where
              young talents are nurtured, and where technology is used to drive
              sustainable development across all sectors.
            </About.CardDesc>
          </About.Card>
        </About.CardsHolder>
        <FqsContainer />
      </About>
    </>
  );
}
