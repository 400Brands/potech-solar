import React from "react";
import { useNavigate } from "react-router-dom";
import { SmcGroup, Hero, Header } from "../components";

export function SmcContainer(props) {
  const navigate = useNavigate();
  return (
    <SmcGroup {...props}>
      <SmcGroup.InfoHolder gap="8px" flex="1">
        <SmcGroup.Title mobWidth="150px" maxWidth="">
          PO Technology Ltd <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          PO Technology Ltd provides all relative works & services to Solar
          Energy.Also provides Training for Solar Installations and maintenance
          of different Solar kits.
        </Hero.Desc>
      </SmcGroup.InfoHolder>
      <SmcGroup.Group>
        <SmcGroup.Card mobWidth="85%">
          
          <SmcGroup.Round>
            <SmcGroup.Image src="house" />
          </SmcGroup.Round>
          <SmcGroup.CompanyName> PO Technology Ltd </SmcGroup.CompanyName>
          <SmcGroup.Description>
            Renewable energy sells, installation and maintenance, signboard construction, printing and trading &
            more
          </SmcGroup.Description>
          <Header.Button
            color="var(--secondry-color)"
            bgColor="rgba(71, 168, 6, 0.1)"
            bgHover="var(--primary-color)"
            colHover="white"
            onClick={() => {
              navigate("/services");
            }}
          >
            Our services
          </Header.Button>
        </SmcGroup.Card>
        <SmcGroup.Card mobWidth="85%">
          
          <SmcGroup.Round>
            <SmcGroup.Image src="woman" />
          </SmcGroup.Round>
          <SmcGroup.CompanyName> PO Technology Academy</SmcGroup.CompanyName>
          <SmcGroup.Description>
            Providing multiple Training Programs for engineering students in
            different branches.
          </SmcGroup.Description>
          <Header.Button
            color="var(--secondry-color)"
            bgColor="rgba(1, 51, 101, 0.1)"
            bgHover="var(--secondry-color)"
            colHover="white"
            onClick={() => navigate("/academy")}
          >
            Go to Academy
          </Header.Button>
        </SmcGroup.Card>
      </SmcGroup.Group>
    </SmcGroup>
  );
}
