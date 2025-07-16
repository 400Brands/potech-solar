import React from "react";
import { Installment, Hero, SmcGroup, Benefits } from "../components";
import bankData from "../fixtures/bank-images.json";
export function InstallmentContainer() {
  return (
    <Installment>
      <Installment.BigImage src="/images/offers.svg" />
      <Installment.Group flex="1" gap="40px">
        <Installment.Group gap="8px">
          <SmcGroup.Title mobWidth="245px" maxWidth="407px">
            Payment Options
            <Hero.Line />
          </SmcGroup.Title>
          <Hero.Desc maxWidth="800px">
            Now you can buy a solar power plant, solar heater or solar
            headlights and pay the same price as cash. you can
            <br />
            <Benefits.TextColor> Make Payment</Benefits.TextColor> Wema Bank - 0125605188 || Peter Olaniyan <br/>
            <Benefits.TextColor> Bank 2 - </Benefits.TextColor> Polaris Bank - 4091895209 || Peter Olaniyan
          </Hero.Desc>
        </Installment.Group>
        <Installment.ImagesGroup width="70%">
          {bankData.map((data) => (
            <Installment.BankImage
              key={data.src}
              src={data.src}
              alt="koko"
              title={data.name}
            />
          ))}
        </Installment.ImagesGroup>
      </Installment.Group>
    </Installment>
  );
}
