import Link from "next/link";
import style from '../../styles/MenuLateral.module.css';

function MenuLateral() {
    return (
        <nav className={style.menu_pai_list }>
            <ul className={style.menu_list}>
                <li>
                    <Link className=" color_page_atual" href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link className="color_white" href="/">
                        SOBRE MIM
                    </Link>
                </li>
                <li>
                    <Link className="color_white" href="/">
                        PROJETOS
                    </Link>
                </li>
                <li>
                    <Link className="color_white" href="/">
                        HABILIDADES
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuLateral;