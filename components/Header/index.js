import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import close from '../../public/close.svg';
import Menu from '../../public/menu.svg';
import style from '../../styles/Header.module.css';
import MenuLateral from '../MenuLateral';

function Header({
    handleMostrarSobre,
    handleMostrarProjetos,
    handleMostrarHabilidades
}) {
    const [open, setOpen] = useState(false);

    return (
        <header className={style.header}>
            <h1>DS</h1>
            <nav className={style.header_pai_list}>
                <ul className={style.header_list}>
                    <li>
                        <Link className=" color_page_atual" href="/">
                            HOME
                        </Link>
                    </li>
                    <li onClick={handleMostrarSobre}>
                        SOBRE MIM
                    </li>
                    <li  onClick={handleMostrarProjetos}>
                        PROJETOS
                    </li>
                    <li  onClick={handleMostrarHabilidades}>
                        HABILIDADES
                    </li>
                </ul>
            </nav>
            <div className={style.div_menu}>
                <Image
                    onClick={() => setOpen(!open)}
                    width={35}
                    height={35}
                    src={open ? close : Menu}
                    alt={open ? 'close' : 'Menu'}
                />
            </div>
           {open && <MenuLateral />}
        </header>
    )
}

export default Header;