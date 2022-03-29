import Image from 'next/image';
import dedimar from '../../public/dedimar.jpeg';
import style from '../../styles/Sobre.module.css';
import Link from 'react-scroll/modules/components/Link';

function Sobre() {
    return(
        <section className={style.conteiner_2}>
        <h1 className={style.titulo_sobre_mim}>
            Sobre mim
        </h1>
       
        <div className={style.apresentacao}>
            <div className={style.apresentacao_image_pai} >
                <Image 
                    className={style.apresentacao_image_filho}
                    src={dedimar} 
                    width={350} 
                    height={450} 
                    alt="Dedimar"
                />
            </div>
            
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