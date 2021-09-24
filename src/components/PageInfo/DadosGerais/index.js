import { Title, SubTitle, SpaceContent, SimpleText } from 'components/common/text';
import { Container } from 'components/common/container';

const DadosGerais = () => {

    return(
        <Container>
            <SpaceContent>
                <Title>Dados gerais</Title>
                <SubTitle>Sobre mim</SubTitle>
                <SimpleText>
                    Olá, me chamo Guilherme, tenho 19 anos e ingressei nesse mundo da tecnologia em meados de março de 2021. De lá pra cá venho melhorando constantemente e aprendendo novos frameworks, metodologias, código limpo e performance. Aqui mostro de uma forma mais dinâmica meus projetos, para que você não precise entrar no meu github e procurar as melhores aplicações. Além de mostrar alguns códigos que me auxiliam no dia a dia.
                </SimpleText>
                <SubTitle>Pretensões futuras</SubTitle>
                <SimpleText>
                    Atualmente estudo ciências da computação na universidade São Judas Tadeu e tenho como planejamento continuar no desenvolvimento web, partindo para next.JS e react Native, devido a similaridade que este possui com react JS, enquanto aprendo outras linguages mais focadas no back-end, ensinadas na faculdade. 
                </SimpleText>
                <SubTitle>
                    Acessando as informações
                </SubTitle>
                <SimpleText>Se você olhar no canto superior direito, há um menu, clique nele para poder ter acesso a outras informações técnicas e projetos.</SimpleText>
            </SpaceContent>
        </Container>
        
    )
}

export default DadosGerais;