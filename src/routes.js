import DropDown from 'components/DropDown';
import { containerDiv } from 'components/DropDown/style';
import Home from 'pages/Home';
import PageInfo from 'pages/PageInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => {


    return(
        <BrowserRouter>
            
            <DropDown />
            
            <Switch>  
                <Route exact path="/" component={Home}/>

                <Route path="/main" component={PageInfo} />
            </Switch>    

            
            
        </BrowserRouter>
    )
}

export default AppRouter;