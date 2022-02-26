import {Container} from './styles'

import GlobalStyles from '../../styles/global'

import Header from '../../components/Header'
import Highlight from "../../components/Highlight";
import ScrollsNews from "../../components/ScrollsNews";
import MostRecent from "../../components/MostRecent";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            <Highlight/>
            <ScrollsNews/>
            <MostRecent/>
            <Footer/>
        </Container>
    )
}