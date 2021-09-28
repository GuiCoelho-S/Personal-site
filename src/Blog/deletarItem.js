import { SimpleText, Title } from 'components/common/text';
import { CardAnotacao, LeiaMais, Code } from 'components/PageInfo/Anotacoes/style';
import { useState } from 'react';

const DeletarItem = () => {

    const [active, setActive] = useState(true);

    return(
        <CardAnotacao>
            {
              active ? 
                    <>
                        <Title>Deletar item</Title>
                        <SimpleText>Quem nunca lidou com problemas de efeitos colaterais no react que atire a primeira pedra, aqui mostro uma saída para isso...</SimpleText>
                        <LeiaMais onClick={() => { setActive(!active)}}>Continuar lendo sobre</LeiaMais>
                    </>

                    
                    : 
                    <>
                        <Title>Deletar item</Title>
                        <SimpleText>Quem nunca lidou com problemas de efeitos colaterais no react que atire a primeira pedra, aqui mostro uma saída para isso...</SimpleText>
                        <SimpleText>Para resolver isso, usaremos o hook useCallback
                            <br></br><br></br>
                            Exemplo 1:
                        </SimpleText>
                        <Code>
                            <code>{`function ListaPessoas() {`}</code>
                            <p></p>
                            <code>	
                                const [pessoas, setPessoas] = useState(['maria','joão', 'antonio']);
                            </code>
                            <p></p>
                            <code>{`const deletarPessoas(id){
		                            setPessoas(currentList => currentLIst.filter((pessoa, indexAnterior) => indexAnterior !== id));
                         }`}</code>
                            <p></p>
                            <code>return(</code>
                            <p></p>
                            <code>{`{  pessoas.map((pessoa, index) => (<Pessoa nome={pessoa} id={index} />)})}`}</code>

                        </Code>
                        <SimpleText>
                            Essa função retorna erro de re-reenderização, para resolver esse problema:<br></br>
                            Basta usar o hook useCallback, pois ele grava na memória funções, o primeiro parâmetro é a função que queremos usar e o segundo é um colchete que diz quando deve ser mudada:<br></br>
                            <br></br>
                            <code>{`const deletar = useCallBack(() => {}, [])`}</code>
                            <br></br>
                            <br></br>
                            Vamos ao código!
                            <br></br>
                            Nessa situação, só precisaremos mudar a lógica de exclusão:
                        </SimpleText>

                            <Code>
                                <code>{`const deletarPessoa = useCallBack((id) => {`}</code>
                                <p></p>
                                <code>{`setPessoas(currentList => currentLIst.filter((pessoa, indexAnterior) => indexAnterior !== id));`}</code>
                                <p></p>
                                <code>{`}, []);`}</code>
                            </Code>
                       
                        <LeiaMais onClick={() => { setActive(!active)}}>Ocultar conteúdo</LeiaMais>
                    </>
            }
        </CardAnotacao>
    )
}

export default DeletarItem