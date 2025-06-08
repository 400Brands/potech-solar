import React from "react";
import { Container, Row, Column, Break, Group, Desc } from "./styles/footer";

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.Row = function FooterRow({ children }) {
  return <Row>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Break = function FooterBreak({ children }) {
  return <Break>{children}</Break>;
};

Footer.Group = function FooterGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Footer.Desc = function FooterDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};
Footer.Logo = function FooterLogo() {
  return (
    <img
      src="https://res.cloudinary.com/dgbreoalg/image/upload/v1749310928/96ca3dff-2f35-47b6-b836-18bdb85d345a_j7puhz.png"
      alt="footer logo"
      width={150}
    />
  );
};
