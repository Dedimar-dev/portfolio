import Link from "next/link";
import style from '../../styles/MenuLateral.module.css';

function MenuLateral({
    handleMostrarSobre,
    handleMostrarProjetos,
    handleMostrarHabilidades,
    setOpen
}) {
    return (
        <nav className={style.menu_pai_list }>
            <ul className={style.menu_list}>
                <li onClick={() => setOpen(false)}>
                    <Link className=" color_page_atual" href="/">
                        HOME
                    </Link>
                </li>
                <li onClick={() => {
                    handleMostrarSobre()
                    setOpen(false);
                }}>
                    SOBRE MIM
                </li>
                <li onClick={() => {
                    handleMostrarProjetos()
                    setOpen(false);
                }}>
                    PROJETOS
                </li>
                <li onClick={() => {
                    handleMostrarHabilidades()
                    setOpen(false);
                }}>
                    HABILIDADES
                </li>
            </ul>
        </nav>
    )
}

export default MenuLateral;