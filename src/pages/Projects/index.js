import * as S from "./style";
import { projects } from "data/projectData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "assets/img/react.png";
import Html from "assets/img/html.png";
import Footer from "components/Footer";
import { Container, ContainerColor } from "components/common/container";
import * as Color from "components/common/varColors";

const Projetos = () => {
  var projectsReverse = projects.slice(0).reverse();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerColor color={Color.whitesmoke}>
      <Container>
        <S.ContainerProjets color={Color.white}>
          <S.Title>Meus projetos</S.Title>
          <S.Text>
            Aqui são meus projetos pessoais que desenvolvi durante o
            aprendizado, estes são projetos desenvolvidos com reactJS
          </S.Text>
          <S.ContainerCards>
            {projectsReverse
              .filter((objetos) => objetos.type === "react")
              .map((item) => {
                return (
                  <S.SingleCardReact key={item.id} data-aos="fade-out">
                    <div>
                      <h3>{item.title}</h3>
                      <S.Img src={React} alt="ícone do react" />
                    </div>
                    <div>
                      <a href={item.site} target="_blank" rel="noreferrer">
                        Acessar o site
                      </a>
                      <span>{item.data}</span>
                    </div>
                    <aside>
                      <S.Text>{item.description}</S.Text>
                      <a href={item.code}>Clique aqui para ver o código</a>
                    </aside>
                  </S.SingleCardReact>
                );
              })}
          </S.ContainerCards>
          <S.Text>Projetos desenvolvidos com apenas html, css e js</S.Text>
          <S.ContainerCards>
            {projectsReverse
              .filter((objetos) => objetos.type === "html")
              .map((item) => {
                return (
                  <S.SingleCardHTML key={item.id} data-aos="fade-out">
                    <div>
                      <h3>{item.title}</h3>
                      <S.Img src={Html} alt="ícone do react" />
                    </div>
                    <div>
                      <a href={item.site} target="_blank" rel="noreferrer">
                        Acessar o site
                      </a>
                      <span>{item.data}</span>
                    </div>
                    <aside>
                      <S.Text>{item.description}</S.Text>
                      <a href={item.code}>Clique aqui para ver o código</a>
                    </aside>
                  </S.SingleCardHTML>
                );
              })}
          </S.ContainerCards>
        </S.ContainerProjets>
        <Footer />
      </Container>
    </ContainerColor>
  );
};

export default Projetos;
