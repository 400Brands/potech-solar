import React from "react";
import { useNavigate } from "react-router-dom";
import { SmcGroup, Hero, Header } from "../components";

export function SmcContainer() {
  const navigate = useNavigate();
  return (
    <SmcGroup>
      <SmcGroup.InfoHolder gap="8px" flex="1">
        <SmcGroup.Title mobWidth="150px" maxWidth="246px">
          PO Tech <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          PO Tech provides all relative works & services to Solar Energy.Also
          provides Training for Solar Installations and maintenance of different
          Solar kits.
        </Hero.Desc>
      </SmcGroup.InfoHolder>
      <SmcGroup.Group>
        <SmcGroup.Card mobWidth="85%">
          <img
            src="https://res.cloudinary.com/dgbreoalg/image/upload/v1748879928/Your_paragraph_text__1_-removebg-preview_rvto74.png"
            width={150}
          />
          <SmcGroup.Round>
            <SmcGroup.Image src="house" />
          </SmcGroup.Round>
          <SmcGroup.CompanyName>PO Tech Solar</SmcGroup.CompanyName>
          <SmcGroup.Description>
            A fresh outbreak that provides all relative works & services to
            Solar Energy
          </SmcGroup.Description>
          <Header.Button
            color="var(--primary-color)"
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
          <img
            src="https://res.cloudinary.com/dgbreoalg/image/upload/v1748880341/Your_paragraph_text__2_-removebg-preview_eyxggg.png"
            width={150}
          />
          <SmcGroup.Round>
            <SmcGroup.Image src="woman" />
          </SmcGroup.Round>
          <SmcGroup.CompanyName>PO Tech Academy</SmcGroup.CompanyName>
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
