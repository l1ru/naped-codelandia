import {Content} from './styles'
import {Link} from "react-router-dom";

export default function () {
    return (
        <Content>
            <div className="title">Naped</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/series">Series</Link>
                <Link to="/films">Filmes</Link>
                <Link to="/animes">Animes</Link>
                <Link to="/games">Games</Link>
                <button>Minha conta</button>
            </div>
        </Content>
    )
}