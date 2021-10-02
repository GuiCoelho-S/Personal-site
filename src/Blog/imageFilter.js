import { SimpleText, Title } from 'components/common/text';
import { CardAnotacao, LeiaMais, Code } from 'pages/Anotacoes/style';
import { useState } from 'react';

const ImageFilter = () => {

    const [active, setActive] = useState(true);

    return(
        <CardAnotacao>
            {
              active ? 
                    <>
                        <Title>Image Filter</Title>
                        <SimpleText>Para quem usa react há um tempo sabe, importar várias imagens em um único componente pode ser ruim, aqui mostro uma saída plausível para esse problema...</SimpleText>
                        <LeiaMais onClick={() => { setActive(!active)}}>Continuar lendo sobre</LeiaMais>
                    </>

                    
                    : 
                    <>
                        <Title>Image Filter</Title>
                        <SimpleText>Para quem usa react há um tempo sabe, importar várias imagens em um único componente pode ser ruim, aqui mostro uma saída plausível para esse problema...
                        
                        </SimpleText>
                        <SimpleText>
                            Componentes que usam muitas imagens, ou ícones que vem de uma pasta interna, gera problemas, principalmente repetição do seguinte modelo: 
                        </SimpleText>
                        <Code>
                            <code>import Dinossauro from '../../images/dinossauro.png'</code>
                            <code>import Casa from '../../images/casa.png'</code>
                            <code>import Carro from '../../images/carro.png'</code>
                            <code>import Moto from '../../images/moto.png'</code>
                            <code>import Bola from '../../images/bola.png'</code><p></p>                           
                            <pre>&lt;Image src="Componente"/ &gt;</pre>
                        </Code>
                        <SimpleText>
                            O grande problema é se eu quiser fazer uma galeria de fotos, para cada imagem eu deveria retornar um componente, e fazer isso sem usar um map é improdutivo.<br></br>Um método que eu encontrei para resolver isso foi o seguinte:
                        </SimpleText>
                        <SimpleText>
                        1. Criar um componente que possui todas as imagens possíveis<br></br>
                        2. Chamar a imagem específica via props
                        </SimpleText>
                        <SimpleText>
                            Vamos ao código:
                        </SimpleText>
                        <Code>
                            <code>import orange from 'assets/images/orange.png';</code>
                            <code>import avocado from 'assets/images/avocado.png';</code>
                            <code>import kiwi from 'assets/images/kiwi.png';</code>
                            <code>{`import { Image } from './style';`}</code>
                            
                            <p></p>
                            <code>const  ImageFilter = (type) {` => {`}</code>
                            <p></p>
                            <code>{` const Images = {`}</code>
                            <code>{`orange: <Image src={orange} alt="orange" /> ,`}</code>
                            <code>{`avocado: <Image src={avocado} alt="avocado" /> ,`}</code>
                            <code>{`kiwi: <Image src={kiwi} alt="kiwi" /> ,`}</code>
                            <code>{`}`}</code>
                            <p></p>
                            <code>return Images[type]</code>
                            <code>{`}`}</code>
                            <p></p>
                            <code>export default ImageFilter;</code>
                        </Code>
                        <SimpleText>Lembrando que Image é um componente de estilização !<br></br>Agora, para usá-lo, basta fazer da seguinte maneira:</SimpleText>
                        <Code>
                            <code>import ImageFilter from "imgFilter/imageFilter.js";</code>
                            <p></p>
                            <code>{`{ImageFilter(name)}`}</code>    
                        </Code>
                        <SimpleText>Esse name, você pode passar automaticamente, se possuir um array de itens por exemplo, ou passar via props.</SimpleText>
                        <LeiaMais onClick={() => { setActive(!active)}}>Ocultar conteúdo</LeiaMais>
                    </>
            }
        </CardAnotacao>
    )
}

export default ImageFilter