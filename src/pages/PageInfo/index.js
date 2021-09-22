import * as S from './style';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';
import { Icon } from 'components/common/Icon';
import DropDown from 'components/PageInfo/Dropdown';
import MainPage from 'components/PageInfo/Main';
import DevIMG from 'assets/img/dev.jpeg';

const PageInfo = () => {

    const [ dropDownOpen, setDropDownOpen ] = useState(false);

    function handleDropDown(bool){
        setDropDownOpen(bool)
    }

    

    return(
        <S.Container>
            <S.Header>
                <article>
                <S.DevImg src={DevIMG}/>
                <div>
                <p>Um lugar que armazena tudo de melhor que aprendi como desenvolvedor</p>
                <S.ContainerIcons>
                    <S.Icons><AiFillGithub /></S.Icons>
                    <S.Icons><AiFillLinkedin /></S.Icons>
                    <S.Icons><AiOutlineWhatsApp /></S.Icons>
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
    )
}

export default PageInfo;