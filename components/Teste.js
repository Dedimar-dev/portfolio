import Image from 'next/image';
import github_light from '../public/github-light.svg';
import gmail2 from '../public/gmail2.png';
import linkedin_light from '../public/linkedin-light.svg';
import seta1 from '../public/Polygon3.svg';
import seta2 from '../public/Polygon5.svg';
import dedimar from '../public/dedimar.png';

function Teste({ handleMostrarSobre, mostrar}) {
   
    return (
        <div>
            <nav>
                <ul className="section-list">
                <li>
                    <a href="https://github.com/Dedimar-dev">
                        <Image width={30} height={30} src={ github_light } alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dedimar-santos-3bba211b7/" >
                        <Image width={30} height={30}src={ linkedin_light } alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="mailto:santos.dedimar@gmail.com?subject=Olá Dedimar," >
                        <Image width={30} height={30} src={ gmail2 } alt="email" />
                    </a>
                </li>
                </ul>
            </nav>
                               
            <div className="titulo"> 
                <div>
                    <h1> Olá, eu sou Dedimar Santos!</h1>
                    <p>E sou apaixonando por tecnologia.</p>  
                </div>
               
                <button  
                    onClick={ handleMostrarSobre } 
                    className="btns btns_sobre">
                    {mostrar? 'Menos sobre mim':'Mais sobre mim'}
                    <Image src={mostrar? seta1: seta2} alt={mostrar? 'Mostrar' : 'Esconder' }/>
                </button>

                
            </div>
           <Image src={dedimar} alt="Dedimar"></Image>
        </div>  
        
    )
}

export default Teste;