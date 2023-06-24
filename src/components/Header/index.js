import { Link } from "react-router-dom";
import "./style.css"

function Header () {
    return (
        <header className="cabecalho">
            <nav className="cabecalho__menu">
                <Link className="cabecalho__menu__link" to="/">Home</Link>
                <Link className="cabecalho__menu__link" to="/sobre">Sobre</Link>
                <Link className="cabecalho__menu__link" to="https://bucketwba.s3.sa-east-1.amazonaws.com/Curr%C3%ADculo+Wesley.pdf" target="_blank">Currículo</Link>
            </nav>
        </header>
    )
}

export default Header;