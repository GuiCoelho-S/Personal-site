import { SpaceContent } from 'components/common/text';
import { Container } from 'components/common/container';
import ImgFilter from 'Blog/imageFilter';
import DeletarItem from 'Blog/deletarItem';
import AxiosRequest from 'Blog/requisicaoAxios';

const Anotacoes = () => {

    console.log('Imprimi aqui')

    return(
        <Container>
            <SpaceContent>
                <ImgFilter />
                <DeletarItem />
                <AxiosRequest />
            </SpaceContent>
        </Container>
    )
}

export default Anotacoes;