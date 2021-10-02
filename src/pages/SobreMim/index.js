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

import { Tech } from 'data/techData';

const SobreMim = () => {

    useEffect(() => {
        
        Aos.init({duration:2000})
    }, [])

    return(
            <>
            <S.emptyDiv />
            <S.ContainerColor>
            
                <h2 id="SobreMim" data-aos="fade-right">Um apaixonado por programação</h2>
                <S.Text>Olá 😃, me chamo Guilherme e sou desenvolvedor front end júnior, com foco em ReactJS</S.Text>
                <S.Text data-aos="fade-left">
                    <h5>Como cheguei até aqui?</h5>
                    Comecei a entrar no mundo da programação em março de 2021, depois de participar de uma feira online da Alura</S.Text>
                <S.Text data-aos="fade-right">Desde então, decidi entrar com todas as forças já decidido que essa seria minha profissão, igressei em uma faculdade com curso especializado em TI</S.Text>
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

                <S.TechCards>
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
            </S.ContainerColor>
            </>
            
    )
}


export default SobreMim


const ImageFilter = (type) => {

    const Images = {
        Html: <S.Img src={Html} alt="Html" /> ,
        Css: <S.Img src={Css} alt="Html" /> ,
        Javascript: <S.Img src={Javascript} alt="Html" /> ,
        React: <S.Img src={React} alt="Html" /> ,
        Redux: <S.Img src={Redux} alt="Html" /> ,
        NextJS: <S.Img src={NextJS} alt="Html" /> ,
        ReactNative: <S.Img src={ReactNative} alt="Html" /> ,
    }

    return Images[type] 
}