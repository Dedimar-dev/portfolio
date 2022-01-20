import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Titulo from '../components/Titulo';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import style from '../styles/Home.module.css';

export default function Home() {
  const [mostrarSobre, setMostrarSobre] = useState(false);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const [irParaSobre, setIrParaSobre] = useState(false);
  const [irParaProjetos, setIrParaProjetos] = useState(false);
  const [irParaHabilidades, setIrParaHabilidades] = useState(false);

  const handleMostrarSobre = () => {

    setMostrarProjetos(false);
    setIrParaProjetos(false);
    setMostrarHabilidades(false);
    setIrParaHabilidades(false);

    if (!irParaSobre) {
      setIrParaSobre(true);
      scroll.scrollTo(650);
      setMostrarSobre(!mostrarSobre);
    }

    if (irParaSobre) {
      setIrParaSobre(false);
      scroll.scrollToTop();
      setTimeout(() => setMostrarSobre(!mostrarSobre), 1000);
    }
  }

  const handleMostrarProjetos = () => {

    setMostrarSobre(false);
    setIrParaSobre(false);
    setMostrarHabilidades(false);
    setIrParaHabilidades(false);

    if (!irParaProjetos) {
      setIrParaProjetos(true);
      scroll.scrollTo(750);
      setMostrarProjetos(!mostrarProjetos);
    }

    if (irParaProjetos) {
      setIrParaProjetos(false);
      scroll.scrollToTop();
      setTimeout(() => setMostrarProjetos(!mostrarProjetos), 1000);
    }
  }

  const handleMostrarHabilidades = () => {

    setMostrarProjetos(false);
    setIrParaProjetos(false);
    setMostrarSobre(false);
    setIrParaSobre(false);

    if (!irParaHabilidades) {
      setIrParaHabilidades(true);
      scroll.scrollTo(1000);
      setMostrarHabilidades(!mostrarHabilidades);
    }

    if (irParaHabilidades) {
      setIrParaHabilidades(false);
      scroll.scrollToTop();
      setTimeout(() => setMostrarHabilidades(!mostrarHabilidades), 1000);
    }
  }

  return (
    <div className={style.conteiner}>
      <Header />
      <Titulo
        handleMostrarSobre={handleMostrarSobre}
        mostrarSobre={mostrarSobre}
        handleMostrarProjetos={handleMostrarProjetos}
        mostrarProjetos={mostrarProjetos}
        handleMostrarHabilidades={handleMostrarHabilidades}
        mostrarHabilidades={mostrarHabilidades}
      />
      {mostrarSobre && <Sobre />}
      {mostrarHabilidades && <Habilidades/>}
      {mostrarProjetos && <Projetos/>}
      <Footer />
    </div>
  )
}
