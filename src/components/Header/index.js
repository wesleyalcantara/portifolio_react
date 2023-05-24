import "./style.css"

function Header () {
    return (
        <header className="cabecalho">
        <nav className="cabecalho__menu">
            <a className="cabecalho__menu__link" href="./index.html">Home</a>
            <a className="cabecalho__menu__link" href="./about.html">Sobre mim</a>
        </nav>
    </header>
    )
}

export default Header;