import dedimar from '../../public/dedimar.jpg';
import Image from  'next/image';

function Sobre() {
    return(
        <section className="conteiner_2 sobre">
        <h1 className="titulo-sobre-mim">Sobre mim</h1>

        <div className=" apresentacao">

        <Image className="section-image"  width={350} height={420} src={ dedimar } alt="imagem-dedimar" />

        <p>
            Dedi é meu apelido favorito, sou preto, nordestino, moro na zona rural.
            Acredito que por meio da tecnologia o mundo pode tornar-se mais igualitário.
            E, minha missão de vida é contribuir para que esse igualitarismo se torne realidade.
            Tenho como objetivo atuar como Desenvolvedor de software Full Stack. Atualmente, estou em processo de
            treinamento na,
            Cubos Academy como bolsista no Programa Cubos Academy e iFood, estou aprendendo HTML, CSS, JavaScript,
            Lógica, Banco de Dados, SQL,
            Node.js, React e GIT. Neste momento, busco fazer parte de organizações que tenham como foco, por meio da
            tecnologia, tornar o mundo um lugar melhor.
        </p>
        </div>
    </section>
    )
}

export default Sobre;