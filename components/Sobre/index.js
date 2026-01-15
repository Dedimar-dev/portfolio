import style from '../../styles/Sobre.module.css';

function Sobre() {

    return(
        <section className={style.conteiner_2}>
            <h1 className={style.titulo_sobre_mim}>
                Sobre mim
            </h1>
            <div className={style.apresentacao}>
                <div className={style.apresentacao_image}></div>
                
                <p>
                    Dedi é meu apelido favorito, nordestino e morador da zona rural, 
                    movido pela missão de usar a tecnologia para criar um mundo mais 
                    igualitário. Com formação pela Cubos Academy/iFood 
                    (JavaScript, Node.js, PostgreSQL, React, HTML, CSS) 
                    e base acadêmica em Python e C++, tenho grande facilidade em aprender 
                    novas ferramentas e busco evolução constante no setor. Busco atuar em 
                    organizações que, assim como eu, acreditam no impacto social da tecnologia.
                </p>
            </div>
        </section>
    )
}

export default Sobre;