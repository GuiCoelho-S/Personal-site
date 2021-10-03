import * as S from './style'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { IoSchoolSharp } from 'react-icons/io5';
import Alura from 'assets/img/front-end.png';
import React from 'assets/img/react.png';
import Html from 'assets/img/html.png';
import Css from 'assets/img/css.png';
import Javascript from 'assets/img/javascript.png';
import Redux from 'assets/img/redux.png';
import NextJS from 'assets/img/next.png';
import ReactNative from 'assets/img/react-native.png';
import Node from 'assets/img/node.png';

import { Tech } from 'data/techData';
import { Container, ContainerColor } from 'components/common/container';
import * as Color from 'components/common/varColors';

const SobreMim = () => {

    useEffect(() => {
        
        Aos.init({duration:2000})
    }, [])

    return(
            <>
            <ContainerColor color={Color.white}>
                <Container>
                    <S.ContainerConteudo>
                    
                        <h2 id="sobreMim" data-aos="zoom-in">Um apaixonado por programação</h2>
                        <S.Text data-aos="fade-in-out">Olá 😃, me chamo Guilherme e sou desenvolvedor front end júnior, com foco em ReactJS</S.Text>
                        <S.Text data-aos="zoom-in">
                            <h5>Como cheguei até aqui?</h5>
                            Comecei a entrar no mundo da programação em março de 2021, depois de participar de uma feira online da Alura</S.Text>
                        <S.Text data-aos="fade-in">Desde então, decidi entrar com todas as forças já decidido que essa seria minha profissão, igressei em uma faculdade com curso especializado em TI</S.Text>
                        <S.Cards>
                            <S.Card data-aos="zoom-in">
                                <h3>Ciência da computação</h3>
                                <IoSchoolSharp  />
                                <h4>Univerdade São Judas Tadeu</h4>
                            </S.Card>
                            <S.Card data-aos="zoom-in">
                                <h3>Programação Front end</h3>
                                <S.Img src={Alura} alt="Front end alura" />
                                <h4>Alura cursos de educação</h4>
                            </S.Card>
                            
                        </S.Cards>
                        <S.Text data-aos="fade-in">
                            <h5>Tecnologias em aprendizado</h5>
                            Abaixo, segue as tecnologias que conheço e estudo ou pretendo estudar
                        </S.Text>

                        <S.TechCards data-aos="zoom-in-down">
                            {
                                Tech.map((item,index) => {
                                    return <S.Card key={index}>
                                        <h5>{item.status}</h5>
                                        {ImageFilter(item.name)}
                                        <p>{item.name}</p>
                                    </S.Card>
                                })

                                
                            }                            
                        </S.TechCards>
                    </S.ContainerConteudo>
                </Container>    
            </ContainerColor>
            </>
            
    )
}


export default SobreMim


const ImageFilter = (type) => {

    const Images = {
        Html: <S.Img src={Html} alt="Card linguagem html" /> ,
        Css: <S.Img src={Css} alt="Card linguagem css" /> ,
        Javascript: <S.Img src={Javascript} alt="Card linguagem javascript" /> ,
        React: <S.Img src={React} alt="Card framework react JS" /> ,
        Redux: <S.Img src={Redux} alt="Card framework redux" /> ,
        NextJS: <S.Img src={NextJS} alt="Card framework next JS" /> ,
        ReactNative: <S.Img src={ReactNative} alt="Card framework react Native" /> ,
        NodeJS: <S.Img src={Node} alt="Card framework NodeJS" />,
    }

    return Images[type] 
}