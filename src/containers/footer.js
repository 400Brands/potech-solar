import React from "react";
import { Footer } from "../components";
import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "phosphor-react";
export function FooterContainer() {
  const iconColor = "rgb(255, 255, 255)";
  const iconSize = "30px";
  return (
    <Footer>
      <Footer.Row>
        <Footer.Column self="flex-end" gap="16px">
          <Footer.Logo />
          <Footer.Desc maxWidth="430px">
            Renewable energy sells, installation and maintenance, signboard
            construction, printing and trading & more
          </Footer.Desc>
          <Footer.Group gap="4px">
            <Copyright color={iconColor} />
            <Footer.Desc>POTECH 2025</Footer.Desc>
          </Footer.Group>
        </Footer.Column>
        <Footer.Break />
        <Footer.Column gap="8px">
          <Footer.Desc>Follow us</Footer.Desc>
          <Footer.Group gap="8px">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/share/19fX5iUefS/"
              target="_blank"
            >
              <FacebookLogo fontSize={iconSize} color={iconColor} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/potechnology_ltd/"
              target="_blank"
            >
              <InstagramLogo fontSize={iconSize} color={iconColor} />
            </a>
            <a
              rel="noreferrer"
              href="https://youtube.com/@potechnology_ltd?si=DZFkNILvcUPulbQv"
              target="_blank"
            >
              <YoutubeLogo fontSize={iconSize} color={iconColor} />
            </a>
          </Footer.Group>
        </Footer.Column>
        <Footer.Break />
        <Footer.Column gap="8px">
          <Footer.Desc>Contact us</Footer.Desc>
          <Footer.Group gap="8px">
            <MapPin fontSize="20px" color={iconColor} />
            <Footer.Desc>
              Headquarter: <br />
              Phase 2, 69 1st Ave Fha, Lugbe 900107, <br />
              Opposite Kilimanjaro Lugbe, Federal Capital Territory
            </Footer.Desc>
          </Footer.Group>
          <Footer.Group gap="8px">
            <Phone fontSize="20px" color={iconColor} />
            <Footer.Desc>+234 703 477 9547</Footer.Desc>
          </Footer.Group>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
