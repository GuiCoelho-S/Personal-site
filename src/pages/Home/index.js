import RingLoader from 'react-spinners/RingLoader';
import { useState, useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineClockCircle, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { GiBrazilFlag } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { projects } from "data/projectData"
import * as S from './style'
import ReactImg from 'components/Home/IMGReact';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [nextPage, setNextPage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNextPage(true);
        }, 2000)
    });

    return(
        <S.Container>
        {
        
            
            loading ? 

            <RingLoader size={100} color={"#34effb"}/> 
            : 
            <S.Content>
                <section>
                <S.DivMain>
                <S.Title>Guilherme Coelho</S.Title>
                {
                   showMore ?
                    (<S.Informations>
                        <S.TitleTwo>Desenvovedor front-end</S.TitleTwo>
                        <div><FaBuilding /><p>cidade: São Paulo</p><GiBrazilFlag /></div>
                        <div><AiOutlineClockCircle /><p>19 anos</p></div>
                        <S.hidden
                        onClick={() => setShowMore(!showMore)}><AiOutlineClose /></S.hidden>
                    </S.Informations>)
                    
                    : (<S.showMore onClick={() => setShowMore(!showMore)}><p>Ver mais</p><AiOutlinePlusCircle /></S.showMore>)
                
                }
                </S.DivMain>
                <S.ImgContainer>
                <ReactImg />
                </S.ImgContainer>
                </section>
                
            </S.Content>
            
            
        }
        {
            nextPage ? (<><S.OtherPage onClick={() => history.push('/main')}><AiOutlineDown /></S.OtherPage>
            <S.TotalProjects><p>Projetos feitos:</p><S.Circle>{projects.length}</S.Circle></S.TotalProjects></>) : <></>
        }
        </S.Container>
    )
}

export default Home;

