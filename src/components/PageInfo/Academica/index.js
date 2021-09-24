import { Container } from "components/common/container"
import { Title, SubTitle, SpaceContent, SimpleText } from 'components/common/text';
import * as S from './style';


const Academica = () => {

    return(
        <Container>
            <SpaceContent>
                <Title>Formação acadêmica</Title>
                <S.ContainerItem>
                    <S.Data>2017 - 2019</S.Data>
                    <S.Content>
                        <SubTitle>Técnico em eletrônica</SubTitle>
                        <SimpleText>Liceu de artes e Ofícios de São Paulo</SimpleText>
                    </S.Content>
                </S.ContainerItem>

                <S.ContainerItem>
                    <S.Data>2019 - Cursando</S.Data>
                    <S.Content>
                        <SubTitle>Ciência da computação</SubTitle>
                        <SimpleText>Universidade São Judas Tadeu</SimpleText>
                    </S.Content>
                </S.ContainerItem>
                
                <S.ContainerItem>
                    <S.Data>2019 - Cursando</S.Data>
                    <S.Content>
                        <SubTitle>Cultura Inglesa </SubTitle>
                        <SimpleText>Nível: global 5 (pré-intermediário) </SimpleText>
                    </S.Content>
                </S.ContainerItem>
                <S.ContainerItem>
                    <S.Data>2019 - Cursando</S.Data>
                    <S.Content>
                        <SubTitle>Alura</SubTitle>
                        <SimpleText>Cursos focados na área de tecnologia</SimpleText>
                    </S.Content>
                </S.ContainerItem>
            </SpaceContent>
            
        </Container>
    )
}

export default Academica

