import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${(props) => props.color};
  padding: 20px 0 10px 0;
  p {
    font-size: 1.4rem;
  }
  @media (max-width: 900px) {
    padding-bottom: 100px;
  }
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }
`;

export const SocialNetwork = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-right: 30px;

  svg {
    height: 40px;
    width: 40px;
  }
`;
