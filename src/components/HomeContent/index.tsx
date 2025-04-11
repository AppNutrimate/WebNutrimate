import {
    ArrowContainer,
    GreenFormContainer,
    IntroText,
    IntroTextContainer,
    MainContainer,
    MainSubtitle,
    MainTitle,
    PurpleFormContainer,
    ScrollContainer,
    ScrollText,
    TagBoxContainer,
    TagContainer,
    TitleContainer } from "./styles";

    const HomeContent = () => {
        return (
            <MainContainer>
                <TagBoxContainer>
                    <TagContainer>Bem-estar&</TagContainer>
                    <TagContainer>Saúde</TagContainer>
                </TagBoxContainer>
                <ScrollContainer
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                >
                    <ScrollText>Continue descobrindo</ScrollText>
                    <ArrowContainer>↓</ArrowContainer>
                </ScrollContainer>
                <IntroTextContainer
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeIn' }}
                >
                    <IntroText>
                    Cuidamos dos detalhes,<br/>
                    pra você focar no que importa:<br/>
                    transformar vidas com a nutrição.
                    </IntroText>
                </IntroTextContainer>
                <PurpleFormContainer/>
                <GreenFormContainer/>
                <TitleContainer>
                    <MainSubtitle>Criando conexões saudáveis:</MainSubtitle>
                    <MainTitle>Rotina leve,</MainTitle>
                    <MainTitle>cuidado presente</MainTitle>
                </TitleContainer>
            </MainContainer>
        )
    }
    
    export default HomeContent;