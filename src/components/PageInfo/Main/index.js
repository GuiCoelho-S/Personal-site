import * as S from './style';
import { Switch, Route} from 'react-router-dom';
import Projects from '../Projects';
import Academica from '../Academica';
import DadosGerais from '../DadosGerais';

const MainPage = () => {

    return(
        <S.MainPageStyle>
            <Switch>
                <Route exact path="/main" component={DadosGerais} />
                <Route path="/main/projects" component={Projects} />
                <Route path="/main/academica" component={Academica} />
                <Route path="/main/tecnologias" component={Projects} />
                <Route path="/main/block" component={Projects} />
            </Switch>

        </S.MainPageStyle>
    )
}

export default MainPage;