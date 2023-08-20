import { Link } from "react-router-dom";
import "./style.css"

function Header () {
    return (
        <header className="cabecalho">
            <nav className="cabecalho__menu">
                <Link className="cabecalho__menu__link" to="/">Home</Link>
                <Link className="cabecalho__menu__link" to="/sobre">Sobre</Link>
                <Link className="cabecalho__menu__link" to="https://github.com/wesleyalcantara/curriculo_wesley/archive/refs/heads/main.zip" target="_blank">Baixar Currículo</Link>
            </nav>
        </header>
    )
}

export default Header;