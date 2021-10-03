import * as S from './style';
import { Container, ContainerColor } from 'components/common/container';
import DeletarItem from 'Blog/deletarItem';
import ImageFilter from 'Blog/imageFilter';
import AxiosRequest from 'Blog/requisicaoAxios';
import Footer from 'components/Footer';

const Anotacoes = () => {

    return(
        <>
            <ContainerColor>
                <Container>
                    <S.ContainerAnotacoes>
                        <DeletarItem />
                        <ImageFilter />
                        <AxiosRequest />    
                    </S.ContainerAnotacoes>  
                </Container>
            </ContainerColor>

            <Footer />
        </>
    )
}

export default Anotacoes