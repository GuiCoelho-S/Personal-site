// Componentes que serão usados para a criação dos blocos de anotações

import styled from "styled-components";

export const SpaceContent = styled.div`
  padding: 0px 30px 80px 30px;
  display: inherit;
  flex-direction: inherit;
  align-items: inherit;

  @media (max-width: 540px) {
    padding-bottom: 120px;
  }
  @media (max-width: 350px) {
    padding: 0 10px;
  }
`;

export const Title = styled.h1`
  color: var(--red);
  font-size: 2rem;
  text-align: start;
  padding: 20px;

  @media (max-width: 400px) {
    text-align: center;
    padding: 0;
  }
`;

export const SubTitle = styled.div`
  color: var(--yellow);
  font-size: 1.5rem;
  text-align: center;
  padding: 20px 0;
`;

export const SimpleText = styled.p`
  align-self: center;
  width: 80%;
  text-align: justify;
  word-wrap: break-word;
  color: var(--white);
  font-weight: 300;
  line-height: 26px;
  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 90%;
  }
`;

export const Date = styled(SimpleText)`
  width: 100%;
  text-align: end;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  align-self: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
