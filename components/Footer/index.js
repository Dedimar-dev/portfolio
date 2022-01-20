import Image from 'next/image';
import Link from 'next/link';
import github_light from '../../public/github-light.svg';
import gmail2 from '../../public/gmail2.png';
import linkedin_light from '../../public/linkedin-light.svg';
import style from '../../styles/Footer.module.css';

function Footer() {
    return(
        <footer className={style.footer}>
            <nav className={style.footer_pai_list}>

                <ul className={style.footer_list}>
                    <li>
                        <Link className="color_white" href="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="color_white" href="/">SOBRE MIM</Link>
                    </li>
                    <li>
                        <Link className="color_white" href="/">PROJETOS</Link>
                    </li>
                    <li>
                        <Link className="color_white" href="/">HABILIDADES</Link>
                    </li>
                </ul>
            </nav>
            <nav className={style.footer_redes}>
                <a href="https://github.com/Dedimar-dev" >
                    <Image width={30} height={30} src={ github_light } alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/dedimar-santos-3bba211b7/" >
                    <Image width={30} height={30} src={ linkedin_light } alt="linkedin" />
                </a>
                <a href="mailto:santos.dedimar@gmail.com?subject=Olá Dedimar," >
                    <Image width={30} height={30} src={ gmail2 } alt="gemail" />
                </a>
            </nav>
        </footer>
    )
}

export default Footer;