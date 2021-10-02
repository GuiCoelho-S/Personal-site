import DropDown from 'components/DropDown';
import Anotacoes from 'pages/Anotacoes';
import Contato from 'pages/Contato';
import Home from 'pages/Home';
import Projetos from 'pages/Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => {


    return(
        <BrowserRouter>
            
            <DropDown />
            
            <Switch>  
                <Route exact path="/" component={Home}/>
                <Route path="/projetosAutorais" component={Projetos} />
                <Route path="/anotacoes" component={Anotacoes} />
                <Route path="/contato" component={Contato} />
            </Switch>    

            
            
        </BrowserRouter>
    )
}

export default AppRouter;