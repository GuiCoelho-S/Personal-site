import * as S from './style';
import { Container, ContainerColor } from 'components/common/container';
import Footer from 'components/Footer';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import * as Color from 'components/common/varColors';

const Contato = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('GmailMessage', 'template_0xot35k', form.current, 'user_FXB0jhb0a2xtYTRwMAd0i')
          .then((result) => {
            alert('Mensagem enviada com sucesso!')
          }, (error) => {
            alert('Sua mensagem não foi enviada :(')
          });
          e.target.reset();
      };

    return(
        <>
            <ContainerColor color={Color.white}>
                <Container>
                    <S.ContainerContato>
                        <h2>Formulário de contato</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label for="nome">Nome *</label>
                                <input placeholder="Digite aqui..." type="text" id="nome" required name="name"/>
                            </div>
                            <div>
                                <label for="email">Email *</label>
                                <input placeholder="Digite seu email aqui...." type="email" id="email" name="email" required/>
                            </div>
                            <div>
                                <label for="assunto">Assunto *</label>
                                <input placeholder="Qual o assunto?" type="text" id="assunto" name="subject"required/>
                            </div>
                            <div>
                                <label for="nome">Me mande alguma mensagem *</label>
                                <textarea placeholder="..." name="message" required />
                            </div>
                            <S.SubmitBtn type="submit">Enviar mensagem</S.SubmitBtn>
                        </form>

      
                    </S.ContainerContato>
                </Container>
                <Footer />
            </ContainerColor>
            
        </>
    )
}

export default Contato;