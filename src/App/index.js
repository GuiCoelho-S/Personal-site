import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import AppRouter from 'routes';

const App = () => {

    document.title = "Guilherme Coelho";
    return (
        <>
            <GlobalStyle />
            <AppRouter />
        </>
    )
}

export default App;


