import * as S from './style';
import { Container } from 'components/common/container';
import DeletarItem from 'Blog/deletarItem';
import ImageFilter from 'Blog/imageFilter';
import AxiosRequest from 'Blog/requisicaoAxios';
import Footer from 'components/Footer';

const Anotacoes = () => {

    return(
        <>
            <S.ContainerColor>
                <Container>
                    <S.ContainerAnotacoes>
                        <DeletarItem />
                        <ImageFilter />
                        <AxiosRequest />    
                    </S.ContainerAnotacoes>  
                </Container>
            </S.ContainerColor>

            <Footer />
        </>
    )
}

export default Anotacoes