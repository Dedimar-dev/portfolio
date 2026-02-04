import { animateScroll as scroll } from 'react-scroll';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Titulo from '../components/Titulo';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import MenuLateral from '../components/MenuLateral';
import Certificados from '../components/Certificados';
import style from '../styles/Home.module.css';
import useGlobal from '../hooks/useGlobal';

export default function Home() {
  const {
    mostrarSecao,
    setMostrarSecao,
    open
  } = useGlobal();

  const {
    mostrarProjetos,
    mostrarHabilidades,
    mostrarSobre,
    mostrarCertificados
  } = mostrarSecao;

  const handleMostrarSobre = () => {

    if (!mostrarSobre) {
      scroll.scrollTo(1000);
      setMostrarSecao({
        mostrarSobre: !mostrarSobre
      })
    }

    if (mostrarSobre) {
      scroll.scrollToTop();
      setTimeout(() => {
        setMostrarSecao({
          mostrarSobre: !mostrarSobre
        })
      }, 1000);
    }
  }

  const handleMostrarProjetos = () => {

    if (!mostrarProjetos) {
      scroll.scrollTo(1000);
      setMostrarSecao({
        mostrarProjetos: !mostrarProjetos
      })
    }

    if (mostrarProjetos) {
      scroll.scrollToTop();
      setTimeout(() => {
        setMostrarSecao({
          mostrarProjetos: !mostrarProjetos
        })
      }, 1000);
    }
  }

  const handleMostrarHabilidades = () => {

    if (!mostrarHabilidades) {
      scroll.scrollTo(1000);
      setMostrarSecao({
        mostrarHabilidades: !mostrarHabilidades
      })
    }

    if (mostrarHabilidades) {
      scroll.scrollToTop();
      setTimeout(() => {
        setMostrarSecao({
          mostrarHabilidades: !mostrarHabilidades
        })
      }, 1000);
    }
  }

  const handleMostrarCertificados = () => {

    if (!mostrarCertificados) {
      scroll.scrollTo(1000);
      setMostrarSecao({
        mostrarCertificados: !mostrarCertificados
      })
    }

    if (mostrarCertificados) {
      scroll.scrollToTop();
      setTimeout(() => {
        setMostrarSecao({
          mostrarCertificados: !mostrarCertificados
        })
      }, 1000);
    }
  }

  return (
    <div className={style.conteiner}>
      <Header
        handleMostrarSobre={handleMostrarSobre}
        handleMostrarProjetos={handleMostrarProjetos}
        handleMostrarHabilidades={handleMostrarHabilidades}
        handleMostrarCertificados={handleMostrarCertificados}
      />
      <Titulo
        handleMostrarSobre={handleMostrarSobre}
        handleMostrarProjetos={handleMostrarProjetos}
        handleMostrarHabilidades={handleMostrarHabilidades}
        handleMostrarCertificados={handleMostrarCertificados}
      />
      {mostrarSobre && <Sobre />}
      {mostrarHabilidades && <Habilidades />}
      {mostrarProjetos && <Projetos />}
      {mostrarCertificados && <Certificados />}
      {open && 
        <MenuLateral 
            handleMostrarSobre={handleMostrarSobre}
            handleMostrarProjetos={handleMostrarProjetos}
            handleMostrarHabilidades={handleMostrarHabilidades}
            handleMostrarCertificados={handleMostrarCertificados}
        />
      }
      <Footer
        handleMostrarSobre={handleMostrarSobre}
        handleMostrarProjetos={handleMostrarProjetos}
        handleMostrarHabilidades={handleMostrarHabilidades}
        handleMostrarCertificados={handleMostrarCertificados}
      />
    </div>
  )
}
