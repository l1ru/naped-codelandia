import {Container} from './styles'

import GlobalStyles from '../../styles/global'
import NavBar from "../../components/NavBar";

import Hero404 from '../../assets/404.svg'
import {Link} from "react-router-dom";


export default function () {
    return (
        <Container>
            <GlobalStyles/>
            <NavBar/>
            <div className={'__notfound__page'}>
                <div className={"__information"}>
                    <h1>Tenho más notícias para você!</h1>
                    <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
                    <button>
                        <Link to={"/"}>
                            Voltar a home
                        </Link>
                    </button>
                </div>
                <div className={"__hero"}>
                    <img src={Hero404}/>
                    <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
                </div>
            </div>
        </Container>
    )
}