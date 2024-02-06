import "./style.css"
import Icon from "../Icon/Icon.jsx";

/* function Footer () {
    return (
        <footer class="rodape">Desenvolvido por Wesley Alcantara</footer>
    )
}

export default Footer; */


export default function Footer() {
    return (
    <div className="footer-container">
        <div className="footer-contact">
          <h3 className="contact-title">
            Contatos
          </h3>
          <p>
            <ul className="contact-info">
              <li>
                Email: wesleybaadm@gmail.com
              </li>
              <li>
                Cel: +55 31 99454-2710
              </li>
            </ul>
          </p>
        </div>
        <div class="social-links">
            <div class="social-links-container">
                <h3>Redes Sociais</h3>
                <a href="https://github.com/wesleyalcantara">
                    <Icon name="github" />
                </a>
                <a href="https://www.linkedin.com/in/wesley-batista-alcantara">
                    <Icon name="linkedin" />
                </a>
                <a href="https://www.instagram.com/wesley.alcantara_">
                    <Icon name="instagram" />
                </a>
            </div>
        </div>
        <div class="footer-info">
            <p>
                <ul>
                    <li>Desenvolvido por: Wesley Batista Alcantara</li>
                </ul>
            </p>
        </div>
    </div>
    );
  }