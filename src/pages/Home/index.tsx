import { Container, Content} from "./styles"
import HeaderBar from "../../components/HeaderBar"
import HomeContent from "../../components/HomeContent"
import PurposeCard from "../../components/PurposeCard"

const Home = () => {
    return (
        <Container>
            <Content>
                <HeaderBar />
                <HomeContent />
                <PurposeCard />
            </Content>
        </Container>
    )
}

export default Home