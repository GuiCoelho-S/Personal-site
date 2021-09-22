import * as S from './style';
import { Container } from 'components/common/container'
import { projects } from 'data/projectData.js';
import ReactIMG from 'assets/img/react.png';
import HtmlIMG from 'assets/img/html.png';
import { SpaceContent, Title, SubTitle } from 'components/common/text'

const Projects = () => {

    var projectsReverse = projects.slice(0).reverse(); //Criado para que pegue o item mais recente do objeto


    return(
        <Container>
            <SpaceContent>
            <Title>Projetos feitos em 2021</Title>
            <SubTitle>React JS</SubTitle>

            <S.ContainerCard>
                {   
                
                    projectsReverse.filter(object =>  object.type === 'react').map((item) => {
                        return <S.CardReact key={item.id}>
                        <h2>{item.title}</h2>
                        <div>
                        <a href={item.site} target="_blank" rel="noreferrer">Clique para ver o site </a>
                        <a href={item.code} target="_blank" rel="noreferrer">Clique para ver o código </a>
                        </div>
                        <p>{item.description} </p>
                        <S.iconImg src={ReactIMG} />
                        <S.Data>{item.data}</S.Data>
                    </S.CardReact>
                    })
                }
            
                
            </S.ContainerCard>

            <SubTitle>HTML, CSS, JS</SubTitle>

            <S.ContainerCard>
                {   
                
                    projects.filter(object =>  object.type === 'html').map((item) => {
                        return <S.CardHtml key={item.id}>
                        <h2>{item.title}</h2>
                        <div>
                        <a href={item.site} target="_blank" rel="noreferrer">Clique para ver o site </a>
                        <a href={item.code} target="_blank" rel="noreferrer">Clique para ver o código </a>
                        </div>
                        <p>{item.description} </p>
                        <S.iconImg src={HtmlIMG} />
                        <S.Data>{item.data}</S.Data>
                    </S.CardHtml>
                    })
                }
            
                
            </S.ContainerCard>
            </SpaceContent>
        </Container>
    )
}
export default Projects

/*

                            <S.CardReact key={item.id}>
                                <h2>{item.title}</h2>
                                <div>
                                <a href={item.site} target="_blank" rel="noreferrer">Clique para ver o site </a>
                                <a href={item.code} target="_blank" rel="noreferrer">Clique para ver o código </a>
                                </div>
                                <p>{item.description} </p>
                                <S.iconImg src={ReactIMG} />
                            </S.CardReact>

*/