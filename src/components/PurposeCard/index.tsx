import { ArrowContainer, ArrowText, CardBox, CardsContainer, CardTitle, FullContainer, GridBar, SubTitle, Title, TitleContainer, TitleContainerCard } from "./styles";

const CardsItems = [
    {title: 'Praticidade', description: 'Atenção ao paciente é fundamental para um atendimento de qualidade.', image: ''},
    {title: 'Você em foco', description: 'Atenção ao paciente é fundamental para um atendimento de qualidade.', image: ''},
    {title: 'Início ao fim', description: 'Atenção ao paciente é fundamental para um atendimento de qualidade.', image: ''},
]

const PurposeCard = () => {    
    return (
        <FullContainer>
            <TitleContainer>
                <Title>Nosso Propósito</Title>
                <SubTitle>
                    Ajudamos você a transformar o seu atendimento atráves do cuidado, atenção e o carinho ao seus pacientes.
                </SubTitle>
            </TitleContainer>
            <GridBar/>
            <CardsContainer>
            {CardsItems.map((item, index) => (
                    <CardBox key={index}>
                        <TitleContainerCard>
                            <CardTitle>{item.title}</CardTitle>
                            <ArrowContainer>
                                <ArrowText>➜</ArrowText>
                            </ArrowContainer>
                        </TitleContainerCard>
                        <GridBar/>
                    </CardBox>
                ))}
            </CardsContainer>
        </FullContainer>
    )
}

export default PurposeCard;