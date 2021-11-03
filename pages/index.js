import Teste from '../components/Teste';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Footer from '../components/Footer';

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
