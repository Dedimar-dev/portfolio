import Link from 'next/link';
import style from '../../styles/Header.module.css';
import Image from 'next/image';
import Menu from '../../public/menu.svg';
import close from '../../public/close.svg';
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className={style.header}>
            <h1>DS</h1>
            <nav className={` ${ open? style.header_fixed_pai_list : style.header_pai_list}`}>
                <ul className={style.header_list}>
                    <li>
                        <Link className=" color_page_atual" href="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="color_white" href="/">
                            EXPERIÊNCIAS
                        </Link>
                    </li>
                    <li>
                        <Link className="color_white" href="/">
                            QUALIFICAÇÕES
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={style.div_menu}>
                <Image
                    onClick={() => setOpen(!open)}
                    width={35}
                    height={35}
                    src={open? close : Menu}
                /> 
            </div>           
        </header>
    )
}

export default Header;