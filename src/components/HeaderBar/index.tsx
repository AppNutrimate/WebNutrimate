import { HeaderBarContainer, HeaderItem, HeaderList, LogoImage, Logotype, MidContainer, StartButton } from "./styles";
import nutrimateLogo from "../../assets/icons/nutrimate-logo-p.png"

const HeaderBar = () => {
    return (
        <HeaderBarContainer>
            <HeaderList>
                <HeaderItem>Como funciona?</HeaderItem>
                <HeaderItem>Planos</HeaderItem>
                <HeaderItem>Para quem é</HeaderItem>
            </HeaderList>
            <MidContainer>
                <LogoImage src={nutrimateLogo} alt="Nutrimate Logo" />
                <Logotype>Nutrimate</Logotype>
            </MidContainer>
            <HeaderList>
                <HeaderItem>FAQ</HeaderItem>
                <HeaderItem>
                    <StartButton>Vamos Começar →</StartButton>
                </HeaderItem>
            </HeaderList>    
        </HeaderBarContainer>
    )
}

export default HeaderBar;
//Como funciona
//Planos
//Para quem é
//LOGO
//FAQ
//Vamos começar

// Nutrimate é uma plataforma que organiza sua rotina, ajudando você
// a ganhar tempo, sem abrir mão da sensibilidade que o cuidado exige.

// Criamos uma ferramenta que cuida dos detalhes,
// pra que você possa se dedicar ao que faz de melhor:
// transformar vidas através da nutrição.