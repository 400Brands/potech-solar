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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#000000'
    }}>
      <img
        src="https://res.cloudinary.com/dgbreoalg/image/upload/v1751372101/WhatsApp_Image_2025-06-28_at_14.54.28_a25a99eb-removebg-preview_zoi1lu.png"
        alt="logo"
        width={65}
        style={{ display: 'block' }}
      />
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.2'
      }}>
        <span style={{ 
          fontWeight: 'bold',
          color: '#474747',
          marginTop: "12px",
          fontSize: '24px',
          letterSpacing: '0.5px'
        }}>
          Technology
        </span>
        <span style={{ 
          color: '#000000',
          fontWeight: 'bold',
          fontSize: '12px',
          alignSelf: 'flex-end'
        }}>
          Academy
        </span>
      </div>
    </div>
  );
};

Header.Logo = function HeaderLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "between",
        gap: "5px",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#000000",
      }}
    >
      <img
        src="https://res.cloudinary.com/dgbreoalg/image/upload/v1751372101/WhatsApp_Image_2025-06-28_at_14.54.28_a25a99eb-removebg-preview_zoi1lu.png"
        alt="logo"
        width={65}
        style={{ display: "block" }}
      />
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.2'
      }}>
        <span style={{ 
          fontWeight: 'bold',
          color: '#474747',
          marginTop: "15px",
          fontSize: '24px',
          letterSpacing: '0.5px'
        }}>
          Technology Ltd
        </span>
        
      </div>
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