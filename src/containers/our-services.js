import React from "react";
import { OurServices, Hero, SmcGroup, Benefits } from "../components";

export function OurServicesContainer(props) {
  return (
    <OurServices {...props}>
      <OurServices.Group>
        <SmcGroup.Title maxWidth="280px">
          Our services
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc>
          <Benefits.TextColor>POTECH</Benefits.TextColor> handles your whole
          solar journey from A-Z
        </Hero.Desc>
      </OurServices.Group>
      <OurServices.Frame />
    </OurServices>
  );
}
