import * as S from './style';
import { FaUserAstronaut,  } from 'react-icons/fa';
import { GiBackForth, GiAtomicSlashes, } from 'react-icons/gi';
import { AiFillBook } from 'react-icons/ai'
import { IoShareSocialSharp } from 'react-icons/io5'
import { Icon } from 'components/common/Icon';
import { useHistory } from 'react-router-dom';

const DropDown = () => {
    const history = useHistory();

    return(
        
            <S.ContainerDropDown>   
                
                    <section>
                        <S.DivIcon href="#sobreMim" onClick={() => {
                            history.push('/');
                            window.scrollTo(0,0);
                        }}>
                            <Icon>
                                <FaUserAstronaut />                         
                            </Icon>
                            <span>Quem sou eu?</span>
                        </S.DivIcon>  
                        <S.DivIcon onClick={() => {
                            history.push('projetosAutorais');
                            window.scrollTo(0,0);
                        }}>
                            <Icon>
                                <GiAtomicSlashes />  
                            </Icon>
                            <span>Projetos</span>
                        </S.DivIcon> 
                        <S.DivIcon onClick={() => {
                            history.push('/anotacoes');
                            window.scrollTo(0,0);}}>
                            <Icon>
                                <AiFillBook />                           
                            </Icon>
                            <span>Anotações</span>
                        </S.DivIcon> 

                        <S.DivIcon onClick={() => {
                            history.push('/contato');
                            window.scrollTo(0,0);}}>
                            <Icon>
                                <IoShareSocialSharp />                           
                            </Icon>
                            <span>Contato</span>
                        </S.DivIcon>   
                            
                        <S.DivIcon  onClick={() => {
                            history.push('/');
                            window.scrollTo(0,0);}}>
                            <Icon>
                                <GiBackForth />   
                            </Icon> 
                            <span>Voltar</span> 
                        </S.DivIcon>   
                    </section> 

                
            </S.ContainerDropDown>  
        
    )
}

export default DropDown;