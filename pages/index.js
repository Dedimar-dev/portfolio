import Teste from '../components/Teste';
import Header from '../components/Header/Header';
import Sobre from '../components/Sobre/Sobre';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

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
    <div className="conteiner">
      <Header />
      <Teste 
        handleMostrarSobre={handleMostrarSobre}
        mostrar={mostrar}
      /> 
      {mostrar && <Sobre />}
      <Footer />
    </div>
  )
}
