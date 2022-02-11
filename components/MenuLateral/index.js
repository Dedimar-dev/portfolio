import Link from "next/link";
import Image from 'next/image';
import style from '../../styles/MenuLateral.module.css';
import close from '../../public/close.svg';
import useGlobal from "../../hooks/useGlobal";

function MenuLateral({
    handleMostrarSobre,
    handleMostrarProjetos,
    handleMostrarHabilidades,
}) {

    const {
        setOpen,
        open
    } = useGlobal();

    return (
        <nav className={style.menu_pai_list }>
            <div className="div-close">
                <Image
                    onClick={() => setOpen(false)}
                    width={35}
                    height={35}
                    src={close}
                    alt={'close'}
                />
            </div>
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