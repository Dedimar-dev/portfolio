import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Titulo from '../components/Titulo';
import style from '../styles/Home.module.css';

export default function Home() {
  const [mostrar, setMostrar] = useState(false);
  const [top, setTop] = useState(false);

  const handleMostrarSobre = () => {
    if (!top) {
      setTop(true);
      scroll.scrollTo(650);
      setMostrar(!mostrar);
    }

    if (top) {
      setTop(false);
      scroll.scrollToTop();
      setTimeout(() => setMostrar(!mostrar), 1000);
    }
  }

  return (
    <div className={style.conteiner}>
      <Header />
      <Titulo
        handleMostrarSobre={handleMostrarSobre}
        mostrar={mostrar}
      />
      {mostrar && <Sobre />}
      <Footer />
    </div>
  )
}
