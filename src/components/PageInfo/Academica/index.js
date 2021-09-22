import { Container } from "components/common/container"
import { Title, SubTitle, SpaceContent, SimpleText, Date, ItemRow } from 'components/common/text';
import styled from 'styled-components';

const Academica = () => {

    return(
        <Container>
            <SpaceContent>
                <Title>Formação acadêmica</Title>
                <Border>
                <SubTitle>Ensino médio</SubTitle>
                <Date>2017 até 2019</Date>
                
                
                <ItemRow><Instituicao>Instituição: </Instituicao><SimpleText>Liceu de artes e Ofícios de São Paulo.</SimpleText></ItemRow>
                <SimpleText>Formação técnico em eletrônica. Escola integral médio/técnico.</SimpleText>
                </Border>
                
                <Border>
                <SubTitle>Ensino superior</SubTitle>
                <Date>2021 ~ atual</Date>
                <ItemRow><Instituicao>Instituição: </Instituicao><SimpleText>Universidade São Judas Tadeu.</SimpleText></ItemRow>
                <SimpleText>Formação: bacharelado em Ciência da computação.</SimpleText>
                </Border>

                <Border>
                <SubTitle>Curso de inglês</SubTitle>
                <Date>2021 ~ atual</Date>
                <ItemRow><Instituicao>Instituição: </Instituicao><SimpleText>Cultura inglesa.</SimpleText></ItemRow>
                <SimpleText>nível de proficiência: global5 (pré-intermediário)</SimpleText>
                </Border>  

                <Border>
                <SubTitle>Curso de programação</SubTitle>
                <Date>2021 ~ atual</Date>
                <ItemRow><Instituicao>Instituição: </Instituicao><SimpleText>Alura, plataforma de educação online.</SimpleText></ItemRow>
                <SimpleText>É aqui que aprendo tudo que sei sobre desenvolvimento web, aqui aprendi sobre ReactJS e pretendo continuar para aprender ReactJS e Next.JS</SimpleText>
                </Border>          
            </SpaceContent>
            
        </Container>
    )
}

export default Academica

const Instituicao = styled(SimpleText)`
color:#ed5b03;
font-weight:400;
padding-right:5px;
width:auto;
`

const Border = styled.div`
border:1px solid var(--white);
padding:0 20px;
border-radius:20px;
margin-top:20px;
`