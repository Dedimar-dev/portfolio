import Image from 'next/image';
import { useState } from 'react';
import setaDireita from '../../public/seta-direita-branca.svg';
import setaEsquerda from '../../public/seta-esquerda-branca.svg';
import CubosAcademy from '../../public/certificados/CubosAcademy.png';
import BradescoBD from '../../public/certificados/Bradesco_BD.png';
import decodificador from '../../public/Decodificador.png';
import style from '../../styles/Certificados.module.css';
import Link from 'next/link';

function Certificados() {
    const [max, setMax] = useState(1);
    const [min, setMin] = useState(0);

    const certificados = [
        {
            id: 1,
            nome: 'Programação do Zero',
            descricao: 'Curso intensivo de Programação do Zero, uma turma realizada em parceria com o iFood que possui carga horária de 750 horas. O curso foi ministrado pela CUBOS ACADEMY entre os dias 07/06/2021 e 17/12/2021.',
            imagem: CubosAcademy,
            site:'',
        },
        {
            id: 2,
            nome: 'MODELAGEM DE DADOS',
            descricao: 'Especialização em estruturação de bancos de dados relacionais, criação de Diagramas Entidade-Relacionamento (DER) e aplicação de regras de normalização para otimização e integridade de sistemas.',
            imagem: BradescoBD,
            site: '',
        },
        {
            id: 3,
            nome: 'Programa de Capacitação em CRM Salesforce',
            descricao: '',
            imagem: '',
            site:''
        },
        {
            id: 4,
            nome: 'Marketplace',
            descricao: 'Desafio de Back-end do Módulo 3 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma API para marketplace.',
            imagem: '',
            site:''
        },

        {
            id: 5,
            nome: 'Dindin',
            descricao: 'Desafio de Front-end do Módulo 3 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma aplicação para controles de finanças pessoais.',
            imagem: '',
            site:''
        },
        {
            id: 6,
            nome: 'Cobos Flix',
            descricao: 'Desafio de Front-end do Módulo 2 do curso Programação do Zero, da Cubos Academy, que consiste em criar uma aplicação para um serviço de streaming (pense num Netflix).',
            imagem: '',
            site:''
        },

        {
            id: 7,
            nome: 'Decodificador de Texto',
            descricao: 'Projeto desenvolvido durante o Alura Challenge - Oracle ONE, que consiste em desenvolver um Decodificador de Texto',
            imagem: '',
            site:''
        },

        {
            id: 8,
            nome: 'Portfólio ',
            descricao: 'Desafio de Front-end do Módulo 1 do curso Programação do Zero, da Cubos Academy, que consiste em replicar um website de portfólio .',
            imagem: '',
            site: ''
        },

    ]

    const handleProximo = () => {
        if (max >= certificados.length) {
            setMax(1);
            setMin(0);
            return
        }
        setMax(max + 1);
        setMin(min + 1);
    }

    const handleAnterior = () => {
        if (min <= 0) {
            setMax(certificados.length );
            setMin(certificados.length - 1);
            return
        }
        setMax(max - 1);
        setMin(min - 1);
    }

    return (
        <div className={style.conteiner_Certificados}>

            <h1>Certificados</h1>
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

            <div className={style.div_certificados}>
                {certificados.slice(min, max).map(certificado => {
                    return (
                        <span
                            key={certificado.id}
                        >
                            <div className={style.div_imagem_certificados}>
                                <Image
                                    width={700}
                                    height={425}
                                    src={certificado.imagem}
                                    alt="Imagem-Projeto"
                                />
                            </div>

                            <div className={style.div_texto}>
                                <h2>{certificado.nome}</h2>
                                <p>{certificado.descricao}</p>
                                <div>
                                { certificado.site &&  
                                    <Link href={certificado.site} target={'_blank'}>
                                        Ver Certificado
                                    </Link>
                                }
                                </div>
                            </div>
                        </span>
                    )
                })}
            </div>
            <h2>{`Página ${max} de ${certificados.length}`}</h2>
        </div>
    )
}

export default Certificados;