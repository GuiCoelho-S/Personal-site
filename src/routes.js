import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const AppRouter = () => {


    return(
        <BrowserRouter>
            <Home />
            <Switch>
            
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;