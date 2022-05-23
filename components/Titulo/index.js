import Image from 'next/image';
import github_light from '../../public/github-light.svg';
import gmail2 from '../../public/gmail2.png';
import linkedin_light from '../../public/linkedin-light.svg';
import seta1 from '../../public/Polygon3.svg';
import seta2 from '../../public/Polygon5.svg';
import style from '../../styles/Titulo.module.css';
import Typical from 'react-typical';
import useGlobal from '../../hooks/useGlobal';
import SimboloPDF from '../../public/ficheiro-pdf.png';

function Titulo({
  handleMostrarSobre,
  handleMostrarProjetos,
  handleMostrarHabilidades,
}) {

  const {
    mostrarSecao,
    setOpen,
    open
  } = useGlobal();

  const {
    mostrarSobre,
    mostrarProjetos,
    mostrarHabilidades
  } = mostrarSecao;

  return (
    <div>
      <nav>
        <ul className="section_list">
          <li>
            <a href="https://github.com/Dedimar-dev">
              <Image 
                width={30} 
                height={30} 
                src={github_light} 
                alt="github" 
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dedimar-santos-3bba211b7/" >
              <Image 
                width={30} 
                height={30} 
                src={linkedin_light} 
                alt="linkedin" 
              />
            </a>
          </li>
          <li>
            <a href="mailto:santos.dedimar@gmail.com?subject=Olá Dedimar," >
              <Image 
                width={30} 
                height={30} 
                src={gmail2} 
                alt="email" 
              />
            </a>
          </li>
        </ul>
      </nav>

      <div className={style.conteiner_titulo}>
        <div>
          <h1> Olá, eu sou Dedimar Santos!</h1>
          <Typical
            loop={Infinity}
            steps={['Full Stack Developer', 1000]}
          />
        </div>
      
        <span className={style.span_btn_mostrar}>
          <button
            onClick={handleMostrarSobre}
            className={`${style.btns_mostrar}`}>
             Sobre mim
            <Image 
              src={mostrarSobre ? seta1 : seta2} 
              alt={mostrarSobre ? 'Mostrar' : 'Esconder'} 
            />
          </button>
          <button
            onClick={handleMostrarProjetos}
            className={`${style.btns_mostrar}`}>
            Projetos
            <Image 
              src={mostrarProjetos ? seta1 : seta2} 
              alt={mostrarProjetos ? 'Mostrar' : 'Esconder'} 
            />
          </button>
          <button
            onClick={() => handleMostrarHabilidades(mostrarHabilidades)}
            className={`${style.btns_mostrar}`}>
            Habilidades
            <Image 
              src={mostrarHabilidades ? seta1 : seta2} 
              alt={mostrarHabilidades ? 'Mostrar' : 'Esconder'} 
            />
          </button>
          <span>
            <a  className={style.curriculo}
                href="https://drive.google.com/file/d/1vXihi0LzB__e0BC1LJQojsGoXw9Ls64c/view?usp=sharing"
                target="_brank"
            >
              Currículo
               <Image 
                width={40} 
                height={40} 
                src={SimboloPDF} 
                alt="SimboloPDF" 
              />
            </a>
        </span>
        </span>
      </div>
    </div>

  )
}

export default Titulo;