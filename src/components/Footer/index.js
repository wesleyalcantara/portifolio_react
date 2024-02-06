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
    <div className="relative mt-auto w-full bg-neutral-900 text-neutral-200 h-30 gap-[40px] sm:gap-[200px] md:gap-[400px] lg:gap-[500px] flex items-start justify-center">
        <div className="flex-row mb-8">
          <h3 className="absolute justify-center font-bold mt-[15px]">
            Contatos
          </h3>
          <p>
            <ul className="mb-[20px] mt-[40px] gap-3">
              <li>
                Email: wesleybaadm@gmail.com
              </li>
              <li>
                Cel: +55 31 99454-2710
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-row justify-start mt-2 gap-3">
            <div className="flex flex-row mt-[40px] mb-[20px] gap-3">
              <h3 className="absolute justify-center font-bold mt-[-35px]">
                Resdes Sociais
              </h3>
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
        <div className="absolute bottom-0 flex justify-start px-px w-full bg-neutral-800">
          <p>
            <ul >
              <li className="px-3">
                Desenvolvido por: Wesley Batista Alcantara
              </li>
            </ul>
          </p>
        </div>
    </div>
    );
  }