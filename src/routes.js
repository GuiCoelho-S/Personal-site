import Home from 'pages/Home';
import PageInfo from 'pages/PageInfo';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter = () => {


    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>

            <Route path="/main" component={PageInfo}>
                

            </Route>
            
        </BrowserRouter>
    )
}

export default AppRouter;