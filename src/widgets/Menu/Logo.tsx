import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark?: boolean | undefined;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIconMobile = styled.div`
  &.mobile-icon {
    width: 52px;
    height: 65px;
  }
`;

const LogoIconDesktop = styled.div`
  &.desktop-icon {
    width: 84px;
    height: 101px;
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIconMobile className="mobile-icon">
        <image width="100%" height="100%" href="/images/egg/logo.png"/>
      </LogoIconMobile>
      <LogoIconDesktop className="desktop-icon">
        <image width="100%" height="100%" href="/images/egg/logo.png"/>
      </LogoIconDesktop>
    </>
  );

  return (
    <Flex flexDirection="column">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mx="8px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
    </Flex>
  );
};

export default Logo;
