import styled from 'styled-components';

export const ContainerItem = styled.article`
  
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;

  flex:1,1 300px;
  justify-content: center;
  margin-top:20px;
  background-color: VAR(--lightGray);
  align-items:center;


`;

export const Data = styled.p`
font-size:1.2rem;
color:var(--white);
width:30%;
text-align:center;

@media (max-width:500px){
    width:100%;
}
`

export const Content = styled.aside`
padding:10px;
width:clamp(300px,100%,400px);
height:100px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:start;

@media (max-width:600px){
    align-items:Center;

    p {
        text-align:center;
    }
}
* {
    padding:0;
}

p {
    align-self:start;
}

`