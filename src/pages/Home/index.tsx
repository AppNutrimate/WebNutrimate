import { Container, Content, MainImage, Signature, Title } from "./styles"
import meditatingImage from "../../assets/images/Meditating.png"

const Home = () => {
    return (
        <Container>
            <Content>
                <MainImage src={meditatingImage} />
                <Title>Shhh... Estou meditandando<br/>OOOHHHMMM</Title>
                <Signature>Nutrimate.</Signature>
            </Content>
        </Container>
    )
}

export default Home