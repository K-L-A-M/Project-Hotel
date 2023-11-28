import { Banner } from "../../components/Banner"
import { Header } from "../../components/Header"
import { InputSearchHome } from "../../components/InputSearchHome"
import { StyledHomePage } from "./styles"

export const HomePage = () => {
    return (
        <StyledHomePage>
            <Header />
            <Banner />
            <InputSearchHome/>
        </StyledHomePage>
    )
}