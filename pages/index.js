import { animateScroll as scroll } from 'react-scroll';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Titulo from '../components/Titulo';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import style from '../styles/Home.module.css';
import { GlobalProvider } from '../Context/GlobalContext';
import useGlobal from '../hooks/useGlobal';

export default function Home() {
  const {
    irParaHabilidades, 
    setIrParaHabilidades,
    irParaProjetos, 
    setIrParaProjetos,
    irParaSobre, 
    setIrParaSobre,
    mostrarProjetos, 
    setMostrarProjetos,
    mostrarHabilidades, 
    setMostrarHabilidades,
    mostrarSobre, 
    setMostrarSobre
  } = useGlobal();


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
    <GlobalProvider>
      <div className={style.conteiner}>
        <Header 
          handleMostrarSobre={handleMostrarSobre}
          handleMostrarProjetos={handleMostrarProjetos}
          handleMostrarHabilidades={handleMostrarHabilidades}
        />
        <Titulo
          handleMostrarSobre={handleMostrarSobre}
          handleMostrarProjetos={handleMostrarProjetos}
          handleMostrarHabilidades={handleMostrarHabilidades}
        />
        {mostrarSobre && <Sobre />}
        {mostrarHabilidades && <Habilidades/>}
        {mostrarProjetos && <Projetos/>}
        <Footer 
          handleMostrarSobre={handleMostrarSobre}
          handleMostrarProjetos={handleMostrarProjetos}
          handleMostrarHabilidades={handleMostrarHabilidades}
        />
      </div>
    </GlobalProvider>
  )
}
