import { Link } from "react-router-dom";
import "./style.css"

function Header () {
    return (
        <header className="cabecalho">
            <nav className="cabecalho__menu">
                <Link className="cabecalho__menu__link" to="/">Home</Link>
                <Link className="cabecalho__menu__link" to="/sobre">Sobre</Link>
                <Link className="cabecalho__menu__link" to="https://wesleytimeline.vercel.app/" target="blank">Timeline</Link>
            </nav>
        </header>
    )
}

export default Header;
