import * as S from './style';
import { TiSocialLinkedin } from 'react-icons/ti';
import { AiOutlineGithub, AiFillMail } from 'react-icons/ai'
import { Container } from 'components/common/container';
const Footer = () => {

    return(
        <S.ContainerColor>
            <Container>
                <S.ContainerFooter>
                    <S.SocialNetwork>
                        <p>Contato</p>
                        <li><a href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/" target="_blank" rel="noreferrer"><TiSocialLinkedin /></a></li>
                        <li><a href="https://github.com/GuiCoelho-S" target="_blank" rel="noreferrer"><AiOutlineGithub /></a></li>
                        <li><a href="mailto:gs.coelho_dev@outlook.com" target="_blank" rel="noreferrer"><AiFillMail /></a></li>
                    </S.SocialNetwork>
                </S.ContainerFooter>
            </Container>
        </S.ContainerColor>
    )
}

export default Footer