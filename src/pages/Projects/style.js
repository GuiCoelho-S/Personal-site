import styled from "styled-components";

export const ContainerProjets = styled.div`
  padding-bottom: 40px;
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 70px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding-left: 20px;
    padding-bottom: 120px;
  }
  @media (max-width: 500px) {
    padding: 10px;
    box-sizing: border-box;
  }

  p {
    color: black;
    padding: 30px 0;
  }
`;

export const Title = styled.h2`
  display: block;
  padding: 0;
  font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
  color: var(--yellow);
`;

export const Text = styled.p`
  color: var(--white);
  font-size: 1.5rem;
  text-align: center;
  padding: 0 30px;

  @media (max-width: 960px) {
    text-align: start;
  }
  @media (max-width: 700px) {
    padding: 0;
    font-size: 1rem;
  }
`;

export const ContainerCards = styled.section`
  align-self: center;
  width: 100%;
  max-width: 1000px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(auto, 440px));
  gap: 40px;
  padding-bottom: 40px;
`;

export const Img = styled.img`
  padding-top: 8px;
  width: 60px;
  height: 60px;
  display: block;
  object-fit: contain;
`;

export const SingleCard = styled.article`
  padding: 0px 20px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 10px;
  border-radius: 14px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    text-align: center;
  }

  aside {
    ${Text} {
      text-align: left;
      padding: 20px 0 !important;
      font-size: 1.1rem;
      padding: 0;
    }
    ${Text} {
      @media (max-width: 500px) {
        font-size: 0.8rem;
      }
    }

    a {
      color: var(--orange);
    }
  }

  @media (max-width: 500px) {
    a,
    span,
    ${Text} {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {
    padding: 0 5px 10px 0;
    width: 90%;
    margin: 0 auto;
  }
`;

export const SingleCardReact = styled(SingleCard)`
  background-color: #fff;
  -webkit-box-shadow: 1px 0px 6px 4px rgba(52, 239, 251, 0.53);
  box-shadow: 1px 0px 6px 4px rgba(52, 239, 251, 0.53);

  * {
    font-variant: 400;
  }
  h3 {
    color: var(--blue);
    font-weight: bold;
  }

  a {
    color: #e74b29;
  }
  span {
    color: white;
  }

  @media (max-width: 400px) {
    padding: 10px 20px;
    box-sizing: border-box;
  }
`;
export const SingleCardHTML = styled(SingleCardReact)`
  -webkit-box-shadow: 1px 0px 6px 4px rgba(251, 128, 40, 0.53);
  box-shadow: 1px 0px 6px 4px rgba(251, 128, 40, 0.53);
  h3 {
    color: var(--orange);
  }
`;
