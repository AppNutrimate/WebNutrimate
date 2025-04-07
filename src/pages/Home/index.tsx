import { Container, Content} from "./styles"
import HeaderBar from "../../components/HeaderBar"
import HomeContent from "../../components/HomeContent"

const Home = () => {
    return (
        <Container>
            <Content>
                <HeaderBar />
                <HomeContent />
            </Content>
        </Container>
    )
}

export default Home