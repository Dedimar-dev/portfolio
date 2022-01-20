import Image from 'next/image';
import { useState } from 'react';
import setaDireita from '../../public/seta-direita-branca.svg';
import setaEsquerda from '../../public/seta-esquerda-branca.svg';
import imagemDesafioFront_M1 from '../../public/desafio_front_M1.png';
import imagemDesafioFront_M2 from '../../public/desafio_front_M2.png';
import imagemDesafioFront_M3 from '../../public/desafio_front_M3.png';
import style from '../../styles/Projetos.module.css';
import Link from 'next/link';

function Projetos() {
    const [max, setMax] = useState(1);
    const [min, setMin] = useState(0);

    const projetos = [
        {
            id: 1,
            nome: 'AAAAAA',
            descricao: '',
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6822173644710563840/',
            imagem: imagemDesafioFront_M1,
            github: '',
            tecnologias:'HTML - CSS'
        },
        {
            id: 2,
            nome: 'Cobos Flix',
            descricao: 'O website trata-se de uma aplicação para um serviço de streaming (pense num Netflix).',
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6839271447643373568/',
            imagem: imagemDesafioFront_M2,
            github: 'https://github.com/Dedimar-dev/desafio-frontend-modulo-02-integral',
            tecnologias:'JavaScript - HTML - CSS'
        },
        {
            id: 3,
            nome: 'Dindin',
            descricao: 'O sistema trata-se de uma aplicação para controles de finanças pessoais.',
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858413633102241793/',
            imagem: imagemDesafioFront_M3,
            github: '',
            tecnologias:'React.js'
        },
        {
            id: 4,
            nome: 'bbbbbb',
            descricao: 'bbbbbbb',
            linkedin: '',
            imagem: imagemDesafioFront_M1,
            github: '',
            tecnologias:''
        },
        {
            id: 5,
            nome: 'CCCCC',
            descricao: 'CCCCC',
            linkedin: '',
            imagem: imagemDesafioFront_M1,
            github: '',
            tecnologias:''
        },
        {
            id: 6,
            nome: 'cccccc',
            descricao: 'cccccc',
            linkedin: '',
            imagem: imagemDesafioFront_M1,
            github: '',
            tecnologias:''
        },
        {
            id: 7,
            nome: 'DDDDD',
            descricao: 'DDDDDD',
            linkedin: '',
            imagem: imagemDesafioFront_M1,
            github: '',
            tecnologias:''
        },
        {
            id: 8,
            nome: 'dddddddd',
            descricao: 'ddddddd',
            linkedin: '',
            imagem: imagemDesafioFront_M1,
            github: '',
            tecnologias:''
        },
    ]

    const handleProximo = () => {
        if (max >= projetos.length) return
        setMax(max += 1)
        setMin(min += 1)
        console.log(max, projetos.length)
    }

    const handleAnterior = () => {
        if (min <= 0) return
        setMax(max -= 1)
        setMin(min -= 1)
    }

    return (
        <div className={style.conteiner_Projetos}>

            <h1>Projetos</h1>
            {max < projetos.length &&
                <div className={style.seta_direita}>
                    <Image
                        src={setaDireita}
                        onClick={handleProximo}
                        alt='Próximo'
                    />
                </div>
            }

            {min > 0 &&
                <div
                    className={style.seta_esquerda}
                >
                    <Image
                        src={setaEsquerda}
                        onClick={handleAnterior}
                        alt='Anterior'
                    />
                </div>

            }
            <div className={style.div_projetos}>
                {projetos.slice(min, max).map(projeto => {
                    return (
                        <span
                            key={projeto.id}
                        >
                            <div className={style.div_imagem_projeto}>
                                <Image
                                    width={700}
                                    height={420}
                                    src={projeto.imagem}
                                    alt="Imagem-Projeto"
                                />
                            </div>

                            <div className={style.div_texto}>
                                <h2>{projeto.nome}</h2>
                                <p>{projeto.descricao}</p>
                                <div>
                                    <Link href={projeto.linkedin}>
                                        <a target={'_blank'}>Ver no Linkedin</a>
                                    </Link>
                                    <br/>
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

        </div>
    )
}

export default Projetos;