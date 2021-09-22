import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import AppRouter from 'routes';

const App = () => {

    document.title = "Guilherme Coelho";
    return (
        <GlobalContainer>
        <GlobalStyle />
            <AppRouter />
        </GlobalContainer>
    )
}

export default App;

const GlobalContainer = styled.div`
margin:0 auto;
max-width:1280px;
width:100%;
height: 100%;
position:relative;
`

