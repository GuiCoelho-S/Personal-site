// Componentes que serão usados para a criação dos blocos de anotações

import styled from 'styled-components';

export const SpaceContent = styled.div`
padding:0px 30px 80px 30px;
display:inherit;
flex-direction:inherit;
align-items:inherit;

@media (max-width:540px){
  padding-bottom:120px;
}
`

export const Title = styled.div`
  color:var(--red);
  font-size:2rem;
  text-align:start;
  padding:20px;
`;

export const SubTitle = styled.div`
  color:var(--yellow);
  font-size:1.5rem;
  text-align:center;
  padding:20px 0;
`;

export const SimpleText = styled.p`
align-self: center;
width:80%;
text-align:justify;
color:var(--white);
font-weight: 300;
line-height:26px;
@media (max-width:600px){
  width:100%;
}
`

export const Date = styled(SimpleText)`
width:100%;
text-align:end;`

export const ItemRow = styled.div`
display:flex;
justify-content:start;
width:100%;
align-self:center;

@media (max-width:600px){
  width:100%;
}`