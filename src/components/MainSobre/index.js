import "./style.css"
import linkedinImage from '../../images/linkedin.png';
import githubImage from '../../images/github.png';
import fotoImage from '../../images/foto.png';

function MainSobre () {
    return (
    <main className="apresentacao">
        <section className="apresentacao__conteudo">
            <h1 className="apresentacao__conteudo__titulo">
                <strong>🪐Bem-vindo ao meu espaço </strong>
            </h1>

            <p className="apresentacao__conteudo__texto">
                Olá! Sou Wesley Alcantara, desenvolvedor Full-Stack com especialidade em  Node.js, React, HTML e CSS.
                <br/><br/>
                    🎓 Tecnólogo em Análise e Desenvolvimento de Sistemas.
                <br/>
                    🎓 Bacharel em Administração de Empresas.
                <br/>
            </p>

            <section>
                <br/>
                    <h2>MINHAS SKILLS</h2>
                <br/>
                <div style={{display: 'inline_block'}}><br/>
                    <img align="center" alt="img-JavaScript" height="40" width="52" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" target="_blank"/>
                    <img align="center" alt="img-React" height="40" width="52" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" target="_blank"/>
                    <img align="center" alt="img-Node" height="40" width="52" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" target="_blank"/>
                    <img align="center" alt="img-Python" height="40" width="52" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" target="_blank"/>
                    <img align="center" alt="img-vscode" height="40" width="52" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" target="_blank"/>
                    <img align="center" alt="img-MySQL" height="40" width="52" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" target="_blank"/>
                </div>
                <br/>
                <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=wesleyalcantara&layout=compact&langs_count=7&theme=dracula" alt="Imagem com amostra de utilização das linguagens de programação"/>
                <br/><br/><br/><br/>
                <div className="apresentacao__links__about">
                    <h2 className="apresentacao__links__subtitulo">Acesse as minhas redes:</h2>
                    <a className="apresentacao__links__navegacao" href="https://www.linkedin.com/in/wesley-alcantara-58148020b/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImage} alt="Icone do LinkedIn"/>
                        LinkedIn
                    </a>
                    <a className="apresentacao__links__navegacao" href="https://github.com/wesleyalcantara" target="_blank" rel="noopener noreferrer">
                        <img src={githubImage} alt="Icone do GitHub"/>
                        GitHub
                    </a>
                </div>
            </section>
        </section>
        <img className="apresentacao__imagem" src={fotoImage} alt="img-Wesley"/>
    </main>
    )
}

export default MainSobre;