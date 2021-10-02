import GlobalStyle from './GlobalStyle';
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


