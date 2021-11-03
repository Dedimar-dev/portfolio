import maleta from '../public/maleta-de-escritorio.png';
import home from '../public/PCB_Heaven.png';
import qualificacoes from '../public/qualificacoes.png';
import Image from 'next/image';
import Link from 'next/link'

function Header() {
    return(
        <header className="header">
            <h1>DS</h1>
            <nav className="header-pai-list">
                <ul className="header-list">
                    <li>                       
                        <Link className=" color-page-atual" href="/">
                             <a>
                                <Image width={30} height={30} src={ home } alt="home" /> 
                                HOME
                            </a>
                        </Link>
                    </li>
                    <li>         
                        <Link className="color-white" href="/">
                            <a>
                                 <Image width={30} height={30} src={ maleta } alt="experiências" /> 
                                 EXPERIÊNCIAS 
                            </a> 
                        </Link>
                    </li>
                    <li>   
                        <Link className="color-white" href="/">  
                            <a>
                                <Image width={30} height={30} src={ qualificacoes } alt="qualificações" /> 
                                QUALIFICAÇÕES
                             </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;