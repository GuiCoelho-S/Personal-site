import styled from 'styled-components';



export const Image = styled.img`
  width:75%;
  animation: rotation linear 8s infinite;
  @keyframes rotation{
      from {rotate:0deg}
      to {rotate:360deg}
  }
`;

