import { SimpleText, Title } from 'components/common/text';
import { CardAnotacao, LeiaMais, Code } from 'components/PageInfo/Anotacoes/style';
import { useState } from 'react';

const AxiosRequest = () => {

    const [active, setActive] = useState(true);

    return(
        <CardAnotacao>
            {
              active ? 
                    <>
                        <Title>Requisições HTTP múltiplas </Title>
                        <SimpleText>Aqui mostro como fazer requisições múltiplas de uma API de forma síncrona, com o método Axios...</SimpleText>
                        <LeiaMais onClick={() => { setActive(!active)}}>Continuar lendo sobre</LeiaMais>
                    </>

                    
                    : 
                    <>
                        <Title>Requisições HTTP múltiplas</Title>
                        <SimpleText>Aqui mostro como fazer requisições múltiplas de uma API de forma síncrona, com o método Axios...</SimpleText>
                        <SimpleText>Tive esse problema ao desenvolver a pokedex, já que ao usuário escolher o pokemon através do input, deveria ser feito 2 requisições em sequência, já que a PokeAPI é uma API fragmentada, segue o código:
                        </SimpleText>     
                        <Code>
                            <code>{`  useEffect(() => {`}</code>
                            <p></p>
                            <code>{` async function getData() {`}</code> 
                            <p></p>
                            <code>const requestOne = await api.get(caminho1)</code>
                            <code>const requestTwo = await api.get(caminho2)</code>
                            <code>const requestThree = await api.get(caminho3)</code>
                            <p></p>
                            <code>{`axios.all([requestOne, requestTwo, requestThree]).then(`}</code>
                            <code>{`axios.spread((...allData) => {`}</code>
                            <p></p>
                            <code>{`const allDataDados = allData[0].data;`}</code>
                            <code>{`const allDataAbility = allData[1].data;`}</code>
                            <code>{`const allDataLocation = allData[2].data;`}</code>
                            <p></p>
                            <code>{`setDados(allDataDados);`}</code>
                            <code>{`setAbility(allDataAbility);`}</code>
                            <code>{`setLocation(allDataLocation);`}</code>
                            <code>{`}))`}</code>
                            <p></p>
                            <code>{`.catch((err) => {`}</code>
                            <code>return console.error('Ops, ocorreu um erro!')</code>
                            <code>{`});`}</code>
                            <code>{`}`}</code>
                            <p></p>
                            <code>getData();</code>
                            <p></p>
                            <code>{`}, [idHandle]);`}</code>
                        </Code>  
                        <SimpleText>
                            Lembrando que o api.get está dessa forma:    
                        </SimpleText>               
                        <Code>
                            <code>{`const api = axios.create({`}</code>
                            <p></p>
                            <code>{`baseURL: "https://pokeapi.co/api/v2/"`}</code>
                            <code>{`})`}</code>
                            <p></p>
                            <code>{`export default api`}</code>
                        </Code>
                        
                        <LeiaMais onClick={() => { setActive(!active)}}>Ocultar conteúdo</LeiaMais>
                    </>
            }
        </CardAnotacao>
    )
}

export default AxiosRequest