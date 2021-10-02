import * as S from './style';
import { FaUserAstronaut,  } from 'react-icons/fa';
import { GiBackForth, GiAtomicSlashes, } from 'react-icons/gi';
import { AiFillBook } from 'react-icons/ai'
import { IoShareSocialSharp } from 'react-icons/io5'
import { Icon } from 'components/common/Icon';

const DropDown = () => {

    return(
        
            <S.ContainerDropDown>   
                
                    <section>
                        <S.DivIcon href="#SobreMim">
                            <Icon>
                                <FaUserAstronaut />                         
                            </Icon>
                            <span>Quem sou eu?</span>
                        </S.DivIcon>  
                        <S.DivIcon href="/">
                            <Icon>
                                <GiAtomicSlashes />  
                            </Icon>
                            <span>Projetos</span>
                        </S.DivIcon> 
                        <S.DivIcon href="/">
                            <Icon>
                                <AiFillBook />                           
                            </Icon>
                            <span>Anotações</span>
                        </S.DivIcon> 

                        <S.DivIcon href="/">
                            <Icon>
                                <IoShareSocialSharp />                           
                            </Icon>
                            <span>Redes sociais</span>
                        </S.DivIcon>   
                            
                        <S.DivIcon href="/">
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