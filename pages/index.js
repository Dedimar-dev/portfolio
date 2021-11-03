import Teste from '../components/Teste';
import Header from '../components/Header/Header';
import Sobre from '../components/Sobre/Sobre';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="conteiner">
      <Header />
      <Teste />
      <Sobre />
      <Footer />
    </div>
  )
}
