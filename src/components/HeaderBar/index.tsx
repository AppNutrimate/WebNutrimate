import nutrimateLogo from "../../assets/icons/nutrimate-logo-p.png"

import { useState } from "react";
import {
  HeaderBarContainer,
  HeaderList,
  HeaderItem,
  MidContainer,
  LogoImage,
  Logotype,
  StartButton,
  HamburgerMenu,
  MobileMenu,
} from "./styles";

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderBarContainer>
      <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </HamburgerMenu>

      <HeaderList className="desktop-only">
        <HeaderItem>Como funciona?</HeaderItem>
        <HeaderItem>Planos</HeaderItem>
        <HeaderItem>Para quem é</HeaderItem>
      </HeaderList>

      <MidContainer>
        <LogoImage src={nutrimateLogo} alt="Nutrimate Logo" />
        <Logotype>Nutrimate</Logotype>
      </MidContainer>

      <HeaderList className="desktop-only">
        <HeaderItem>FAQ</HeaderItem>
        <HeaderItem>
          <StartButton>Vamos Começar →</StartButton>
        </HeaderItem>
      </HeaderList>

      {isMenuOpen && (
        <MobileMenu>
          <HeaderItem onClick={() => setIsMenuOpen(false)}>Como funciona?</HeaderItem>
          <HeaderItem onClick={() => setIsMenuOpen(false)}>Planos</HeaderItem>
          <HeaderItem onClick={() => setIsMenuOpen(false)}>Para quem é</HeaderItem>
          <HeaderItem onClick={() => setIsMenuOpen(false)}>FAQ</HeaderItem>
          <HeaderItem>
            <StartButton>Vamos Começar →</StartButton>
          </HeaderItem>
        </MobileMenu>
      )}
    </HeaderBarContainer>
  );
};

export default HeaderBar;
