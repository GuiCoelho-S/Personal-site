import { Container } from 'components/common/container'; 
import * as S from './style';
import { projects } from "data/projectData";
import { FaBuilding } from 'react-icons/fa';
import { GiBrazil } from 'react-icons/gi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import React from 'assets/img/react.png'
import Cogumelo from 'assets/img/cogumelo.png'
import SobreMim from "pages/SobreMim";
import Footer from 'components/Footer';

const Home = () => {

    return(
        <S.ContainerColor>
        <Container>       
                <S.ContainerHome>
                    <S.Project><p>Projetos feitos: </p><span>{projects.length}</span></S.Project>
                    <S.conteudoMain>
                        <S.Info>
                            <h1>Guilherme Coelho</h1>
                            <h2>Desenvolvedor front end</h2>

                            <div><FaBuilding /><p>São Paulo / SP</p><GiBrazil /></div>   
                            <div><AiOutlineFieldTime /><p>19 anos</p></div> 
                        </S.Info> 
                        <aside>
                            <S.Image src={React} alt="Logo do reactJS girando infinitamente" /> 
                        </aside>
                    </S.conteudoMain>   
                    <S.ViewMore>
                        <S.Ballon><p>Continue arrastando para ver mais informações</p></S.Ballon>
                        <S.Image src={Cogumelo} alt="cogumelo do mário bros indicando que há mais informações para serem vistas"/>
                    </S.ViewMore>
                   

                </S.ContainerHome>
                </Container>
                <SobreMim />
                <Footer />       

        </S.ContainerColor>
    )
    }
export default Home;