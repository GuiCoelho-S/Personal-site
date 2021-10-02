import styled from 'styled-components';

export const ContainerColor = styled.div`
  background-color:#222222;
  width:100%;
  height:100%;
`;

export const ContainerFooter = styled.div`
margin-left:auto;

p {
  font-size:1.4rem;
}
@media (max-width:900px){
  padding-bottom:100px;
}
@media (max-width:600px){
  padding-bottom:40px;
}
`

export const SocialNetwork = styled.ul`
display:flex;
gap:20px;
align-items:center;
padding-right:30px;

svg {
  height:40px;
  width:40px;
}
`