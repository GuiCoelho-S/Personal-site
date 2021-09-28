import * as S from './style';
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const DropDown = ({hiddenDropDown}) => {

    const history = useHistory();

    return(
        <motion.div initial={{y:-400}} animate={{y:0}} transition={{duration:0.8, ease:"easeOut"}}>
        <S.DropDownStyle>
            <S.HiddenDropDown onClick={() => {hiddenDropDown(false)}}><AiOutlineClose /></S.HiddenDropDown>
            <li>
                <S.Link onClick={() => {
                            history.push('/main/');
                            window.scrollTo(0,0);
                        }}><p>Dados gerais</p>
                </S.Link>
            </li>

            <li>
                <S.Link onClick={() => {
                                history.push('/main/projects');
                                window.scrollTo(0,0);
                            }}><p>Projects</p>
                </S.Link>
            </li>

            <li>
                <S.Link onClick={() => {
                                    history.push('/main/academica');
                                    window.scrollTo(0,0);
                                    }}><p>Formação Acadêmica</p>
                </S.Link></li>

            <li>
                <S.Link onClick={() => {
                                    history.push('/main/anotacoes');
                                    window.scrollTo(0,0);
                                }}><p>Anotações</p>
                </S.Link>
            </li>
            
            <li>
                <S.Link onClick={() => history.push('/')}><p>Voltar</p></S.Link></li>
        </S.DropDownStyle>
        </motion.div>
    )
}
export default DropDown ;


