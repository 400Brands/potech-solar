import React from "react";
import {
  Container,
  Nav,
  Link,
  Group,
  Button,
  HeaderAcademyLink,
  AcademyLink,
  HeaderMob,
  MenuMob,
  BurgerIcon,
  NavMob,
  NavLinksMob,
  GroupMob,
} from "./styles/header";
export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Nav>{children}</Nav>
    </Container>
  );
}

Header.Link = function HeaderLink({ to, children, ...restProps }) {
  return (
    <Link to={to ? to : "/"} {...restProps}>
      {children}
    </Link>
  );
};

Header.HeaderAcademyLink = function HeaderHeaderAcademyLink({
  to,
  children,
  ...restProps
}) {
  return (
    <HeaderAcademyLink to={to ? to : "/"} {...restProps}>
      {children}
    </HeaderAcademyLink>
  );
};

Header.AcademyLink = function HeaderAcademyLink({
  to,
  children,
  ...restProps
}) {
  return (
    <AcademyLink to={to ? to : "/academy"} {...restProps}>
      {children}
    </AcademyLink>
  );
};

Header.Group = function HeaderGroup({ children }) {
  return <Group>{children}</Group>;
};

Header.Button = function HeaderButton({ to, children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.AcademyLogo = function HeaderAcademyLogo() {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dgbreoalg/image/upload/v1748880341/Your_paragraph_text__2_-removebg-preview_eyxggg.png"
        width={150}
      />
    </div>
  );
};
Header.Logo = function HeaderLogo() {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dgbreoalg/image/upload/v1748879928/Your_paragraph_text__1_-removebg-preview_rvto74.png"
        width={150}
      />
    </div>
  );
};

// ------------- mobile view ------------- //

Header.HeaderMob = function HeaderHeaderMob({ to, children, ...restProps }) {
  return (
    <HeaderMob {...restProps}>
      <NavMob>{children}</NavMob>
    </HeaderMob>
  );
};

Header.MenuMob = function HeaderMenuMob({ to, children, ...restProps }) {
  return <MenuMob {...restProps}>{children}</MenuMob>;
};

Header.BurgerIcon = function HeaderBurgerIcon({ to, children, ...restProps }) {
  return <BurgerIcon {...restProps}>{children}</BurgerIcon>;
};

Header.NavLinksMob = function HeaderNavLinksMob({
  to,
  children,
  ...restProps
}) {
  return <NavLinksMob {...restProps}>{children}</NavLinksMob>;
};

Header.GroupMob = function HeaderGroupMob({ to, children, ...restProps }) {
  return <GroupMob {...restProps}>{children}</GroupMob>;
};
