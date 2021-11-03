import api from '../public/api.png';
import backEndApi from '../public/back-end-api.png';
import img_desafio_1 from '../public/desafio_M1.png';
import img_desafio_2 from '../public/desafio_M2.png';
import github_dark from '../public/github-dark.svg';
import github_light from '../public/github-light.svg';
import gmail from '../public/gmail.png';
import gmail2 from '../public/gmail2.png';
import linkedin_dark from '../public/linkedin-dark.svg';
import linkedin_light from '../public/linkedin-light.svg';
import qualificacoes from '../public/qualificacoes.png';
import maleta from '../public/maleta-de-escritorio.png';

import Image from  'next/image';

import Link from 'next/link';

function Teste() {
    return (
        <div>
           

        <nav>
            <ul className="section-list">
            <li>
                <Link href="https://github.com/Dedimar-dev">
                    <Image width={30} height={30} src={ github_light } alt="github" />
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/dedimar-santos-3bba211b7/" >
                    <Image width={30} height={30}src={ linkedin_light } alt="linkedin" />
                </Link>
            </li>
            <li>
                <Link href="mailto:santos.dedimar@gmail.com?subject=Olá Dedimar," >
                    <Image width={30} height={30} src={ gmail2 } alt="email" />
                </Link>
            </li>
            </ul>
        </nav>


        <div className="titulo">
          
            <div className="titulo-apresentacao">
               
                <h1>
                    Olá, eu sou Dedimar!
                    E sou apaixonando por tecnologia.
                </h1>
                <Link className="color-white" href="#sobre">
                    <button className="btns">Sobre mim</button>
                </Link>
            </div>  
        </div>

    </div>
       
    )
}

export default Teste;