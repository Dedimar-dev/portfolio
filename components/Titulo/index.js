import Image from 'next/image';
import github_light from '../../public/github-light.svg';
import gmail2 from '../../public/gmail2.png';
import linkedin_light from '../../public/linkedin-light.svg';
import seta1 from '../../public/Polygon3.svg';
import seta2 from '../../public/Polygon5.svg';
import style from '../../styles/Titulo.module.css';

function Titulo({ 
    handleMostrarSobre, 
    mostrarSobre, 
    handleMostrarProjetos, 
    mostrarProjetos, 
    handleMostrarHabilidades, 
    mostrarHabilidades 
}) {

    return (
        <div>
            <nav>
                <ul className="section_list">
                    <li>
                        <a href="https://github.com/Dedimar-dev">
                            <Image width={30} height={30} src={github_light} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dedimar-santos-3bba211b7/" >
                            <Image width={30} height={30} src={linkedin_light} alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:santos.dedimar@gmail.com?subject=Olá Dedimar," >
                            <Image width={30} height={30} src={gmail2} alt="email" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={style.conteiner_titulo}>
                <div>
                    <h1> Olá, eu sou Dedimar Santos!</h1>
                    <p>E sou apaixonando por tecnologia.</p>
                </div>

                <span className={style.span_btn_mostrar}>
                     <button
                        onClick={handleMostrarSobre}
                        className={`${style.btns_mostrar}`}>
                        {mostrarSobre ? 'Menos sobre mim' : 'Mais sobre mim'}
                    <Image src={mostrarSobre ? seta1 : seta2} alt={mostrarSobre ? 'Mostrar' : 'Esconder'} />
                    </button>
                    <button
                        onClick={handleMostrarProjetos}
                        className={`${style.btns_mostrar}`}>
                            Projetos
                        <Image src={mostrarProjetos ? seta1 : seta2} alt={mostrarSobre ? 'Mostrar' : 'Esconder'} />
                    </button>
                    <button
                        onClick={handleMostrarHabilidades}
                        className={`${style.btns_mostrar}`}>
                            Habilidades
                        <Image src={mostrarHabilidades ? seta1 : seta2} alt={mostrarSobre ? 'Mostrar' : 'Esconder'} />
                    </button>
                </span>
               
            </div>
        </div>

    )
}

export default Titulo;