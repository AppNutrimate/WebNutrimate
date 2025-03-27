import { Container, Content, MainImage, Signature, Title } from "./styles"
import rollingImage from "../../assets/images/Rolling.png"
import { useNavigate } from "react-router-dom"


const Soon = () => {
    return (
        <Container>
            <Content>
                <MainImage src={rollingImage} />
                <Title>Seu próximo prato pode ser<br/>só começo da sua melhor fase!</Title>
                <Signature>Em breve, Nutrimate.</Signature>
            </Content>
        </Container>
    )
}

export default Soon