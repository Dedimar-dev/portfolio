import github_light from '../public/github-light.svg';
import linkedin_light from '../public/linkedin-light.svg';
import gmail2 from '../public/gmail2.png';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return(
        <footer className="footer">
            <nav className="footer-pai-list">

            <ul className="footer-list ">
                <li>
                    <Link className=" color-white" href="/">HOME</Link>
                </li>
                <li>
                    <Link className="color-white" href="/">EXPERIÊNCIAS</Link>
                </li>
                <li>
                    <Link className="color-white" href="/">QUALIFICAÇÕES</Link>
                </li>
            </ul>
            </nav>
            <nav className="footer-redes">
                <Link href="https://github.com/Dedimar-dev" >
                    <Image width={30} height={30} src={ github_light } alt="github" />
                </Link>
                <Link href="https://www.linkedin.com/in/dedimar-santos-3bba211b7/" >
                    <Image width={30} height={30} src={ linkedin_light } alt="linkedin" />
                </Link>
                <Link href="mailto:santos.dedimar@gmail.com?subject=Olá Dedimar," >
                    <Image width={30} height={30} src={ gmail2 } alt="gemail" />
                </Link>
            </nav>
        </footer>
    )
}

export default Footer;