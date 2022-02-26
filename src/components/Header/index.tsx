import { Container, Content } from './styles'

import { Link } from 'react-router-dom'
import NavBar from "../NavBar";

export default function Header() {
    return (
        <Container>
            <NavBar />

            <div className={"__description"} >
                <h1>Mundo nerd? Naped!</h1>
                <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
            </div>
        </Container>
    )
}