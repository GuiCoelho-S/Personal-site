import * as S from './style';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';
import { Icon } from 'components/common/Icon';
import DropDown from 'components/PageInfo/Dropdown';
import MainPage from 'components/PageInfo/Main';
import DevIMG from 'assets/img/dev.jpeg';
import { motion } from 'framer-motion';

const PageInfo = () => {

    const [ dropDownOpen, setDropDownOpen ] = useState(false);

    function handleDropDown(bool){
        setDropDownOpen(bool)
    }

    

    return(
        <motion.div 
        initial={{y:1000}} animate={{y:0}} transition={{duration:0.8, ease:"easeOut"}}
        >
            <S.Container>
                <S.Header>
                    <article>
                    <S.DevImg src={DevIMG}/>
                    <div>
                    <p>Um lugar que armazena tudo de melhor que aprendi como desenvolvedor</p>
                    <S.ContainerIcons>
                        
                            <S.Icons href="https://github.com/GuiCoelho-S" target="_blank" ><AiFillGithub /></S.Icons>
                            <S.Icons href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/" target="_blank"><AiFillLinkedin /></S.Icons>
                            <S.Icons href="https://wa.me/5511992103006?text=Olá,%20🙂"><AiOutlineWhatsApp /></S.Icons>
                        
                    </S.ContainerIcons>
                    </div>

                    </article>
                    
                </S.Header>
                <S.ContainerMain>
                <MainPage />  

                <S.Section>
                    {
                        dropDownOpen ? <DropDown hiddenDropDown={handleDropDown}/> : <Icon type="button"  onClick={() => setDropDownOpen(true)}><AiOutlineMenuFold /></Icon>
                        
                    }
                </S.Section>
                </S.ContainerMain>
            </S.Container>
        </motion.div>
    )
}

export default PageInfo;