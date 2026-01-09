import Image from 'next/image';
import { useState } from 'react';
import setaDireita from '../../public/seta-direita-branca.svg';
import setaEsquerda from '../../public/seta-esquerda-branca.svg';
import imagemDesafioFront_M1 from '../../public/desafio_front_M1.png';
import imagemDesafioFront_M2 from '../../public/desafio_front_M2.png';
import imagemDesafioBack_M2 from '../../public/desafio_back_M2.png';
import imagemDesafioBack_M3 from '../../public/desafio_back_M3.png';
import imagemDesafioFront_M3 from '../../public/desafio_front_M3.png';
import miniDeliveryFront from '../../public/mini_delivery_front.png';
import apiMiniDelivery from '../../public/api_mini_delivery.png';
import decodificador from '../../public/Decodificador.png';
import style from '../../styles/Projetos.module.css';
import Link from 'next/link';

function Projetos() {
    const [max, setMax] = useState(1);
    const [min, setMin] = useState(0);

    const projetos = [
        {
            id: 1,
            nome: 'API Mini Delivery',
            descricao: 'Uma API REST feita para treinar integração com o Front end (site para cadastro de produtos (Fast food)).',
            imagem: apiMiniDelivery,
            site:'https://mini-delivery.netlify.app/',
            github: 'https://github.com/Dedimar-dev/Mini-Delivery',
            tecnologias: 'Node.js - Express.js - API Rest'
        },
        {
            id: 2,
            nome: 'Mini Delivery',
            descricao: 'Um site para cadastro de produtos (Fast food). Desenvolvido para treinar integração com o back end (API Mini Delivery)',
            imagem: miniDeliveryFront,
            github: 'https://github.com/Dedimar-dev/mini-delivery-front',
            site: 'https://mini-delivery.netlify.app/',
            tecnologias: 'React.js - CSS',
        },
        {
            id: 3,
            nome: 'Banco Digital',
            descricao: 'Desafio de Back-end do Módulo 2 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma API para um Banco Digital.',
            imagem: imagemDesafioBack_M2,
            github: 'https://github.com/Dedimar-dev/desafio-backend-modulo-02-sistema_bancario-',
            tecnologias: 'Node.js - Express.js - API Rest'
        },
        {
            id: 4,
            nome: 'Marketplace',
            descricao: 'Desafio de Back-end do Módulo 3 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma API para marketplace.',
            imagem: imagemDesafioBack_M3,
            github: 'https://github.com/Dedimar-dev/desafio-back-end-m03-',
            tecnologias: 'Node.js - Express.js - API Rest'
        },

        {
            id: 5,
            nome: 'Dindin',
            descricao: 'Desafio de Front-end do Módulo 3 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma aplicação para controles de finanças pessoais.',
            imagem: imagemDesafioFront_M3,
            github: '',
            tecnologias: 'React.js - CSS'
        },
        {
            id: 6,
            nome: 'Cobos Flix',
            descricao: 'Desafio de Front-end do Módulo 2 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma aplicação para um serviço de streaming (pense num Netflix).',
            imagem: imagemDesafioFront_M2,
            github: 'https://github.com/Dedimar-dev/desafio-frontend-modulo-02-integral',
            tecnologias: 'JavaScript - HTML - CSS'
        },

        {
            id: 7,
            nome: 'Decodificador de Texto',
            descricao: 'Projeto desenvolvido durante o Alura Challenge - Oracle ONE, que consiste em desenvolver um Decodificador de Texto',
            imagem: decodificador,
            github: 'https://github.com/Dedimar-dev/alura-challenge-oracle-one',
            site:'https://decodificador-de-texto-dedimar.netlify.app/',
            tecnologias: 'JavaScript - HTML - CSS'
        },

        {
            id: 8,
            nome: 'Portfólio ',
            descricao: 'Desafio de Front-end do Módulo 1 do curso Programação do Zero, da Cubos Academy, que consiste em replicar um website de portfólio .',
            imagem: imagemDesafioFront_M1,
            github: 'https://github.com/Dedimar-dev/Desafio-front-end-modulo-1',
            tecnologias: 'HTML - CSS'
        },

    ]

    const handleProximo = () => {
        if (max >= projetos.length) {
            setMax(1);
            setMin(0);
            return
        }
        setMax(max + 1);
        setMin(min + 1);
    }

    const handleAnterior = () => {
        if (min <= 0) {
            setMax(projetos.length );
            setMin(projetos.length - 1);
            return
        }
        setMax(max - 1);
        setMin(min - 1);
    }

    return (
        <div className={style.conteiner_Projetos}>

            <h1>Projetos</h1>
                <div className={style.seta_direita}>
                    <Image
                        src={setaDireita}
                        onClick={handleProximo}
                        alt='Próximo'
                    />
                </div>
            
                <div
                    className={style.seta_esquerda}
                >
                    <Image
                        src={setaEsquerda}
                        onClick={handleAnterior}
                        alt='Anterior'
                    />
                </div>

            <div className={style.div_projetos}>
                {projetos.slice(min, max).map(projeto => {
                    return (
                        <span
                            key={projeto.id}
                        >
                            <div className={style.div_imagem_projeto}>
                                <Image
                                    width={1000}
                                    height={425}
                                    src={projeto.imagem}
                                    alt="Imagem-Projeto"
                                />
                            </div>

                            <div className={style.div_texto}>
                                <h2>{projeto.nome}</h2>
                                <p>{projeto.descricao}</p>
                                <div>
                                { projeto.site &&  
                                    <Link href={projeto.site}>
                                        <a target={'_blank'}>Ver Site</a>
                                    </Link>
                                }
                                    <Link href={projeto.github}>
                                        <a target={'_blank'}>Ver no GitHub</a>
                                    </Link>
                                </div>
                                <p>{projeto.tecnologias}</p>
                            </div>
                        </span>
                    )
                })}
            </div>
            <h2>{`Página ${max} de ${projetos.length}`}</h2>
        </div>
    )
}

export default Projetos;