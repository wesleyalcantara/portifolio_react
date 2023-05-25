import "./style.css"
import linkedinImage from '../../images/linkedin.png';
import githubImage from '../../images/github.png';
import fotoImage from '../../images/foto.png';

function MainHome () {
    return (
    <main className="apresentacao">
        <section className="apresentacao__conteudo">
            <h1 className="apresentacao__conteudo__titulo">
                Eleve seu negócio digital a outro nível <strong className="titulo-destaque">com um site de qualidade!</strong>
            </h1>
            <p className="apresentacao__conteudo__texto">
                Olá! Sou Wesley Alcantara, desenvolvedor Full-Stack com especialidade em  Node.js, React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?
            </p>
            <div className="apresentacao__links">
                <h2 className="apresentacao__links__subtitulo">Acesse as minhas redes:</h2>
                <a className="apresentacao__links__navegacao" href="https://www.linkedin.com/in/wesley-alcantara-58148020b/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImage} alt="LinkedIn" />
                    LinkedIn
                </a>

                <a className="apresentacao__links__navegacao" href="https://github.com/wesleyalcantara" target="_blank" rel="noopener noreferrer">
                    <img src={githubImage} alt="GitHub" />
                    GitHub
                </a>

            </div>
        </section>
        <img className="apresentacao__imagem" src={fotoImage} alt="img-Wesley" />
    </main>
    )
}

export default MainHome;