import styled from 'styled-components';

export const ContainerAnotacoes = styled.div`
padding:40px 0 40px 70px;
min-height:100vh;
height:100%;
width:100%;
display:flex;
flex-direction:column;
gap:20px;
align-items: center;
h1 {
  color:black;
}

@media (max-width:900px){
  padding-left:10px;
}
@media (max-width:500px){
  padding:40px 20px;
}
@media (max-width:350px){
    padding:40px 0 40px 0;
    width:90%;
    margin:0 auto;
}
`
export const CardAnotacao = styled.article`
width:clamp(280px,100%,800px);
background-color:#6c6c6c;
padding:10px 30px;
min-height:70px;
height:100%;
display:flex;
flex-direction:column;
justify-content: space-evenly;
border-radius:14px;
transition-property: height;
transition:all 0.6s;
h1 {
    padding:0;
    color:var(--orange);
    font-size:1.6rem;
}
p {
    align-self:flex-start;
    text-align:left;
    width:100%;
    
}
@media (max-width:620px){
      padding:20px;
      width:90%;
  }


`

export const LeiaMais = styled.button`
align-self:end;
display:flex;
align-items:center;
border:none;
color:white;
transition:all 0.8s;
cursor:pointer;
font-size:1rem;
margin-top:20px;
p {
    padding-right:8px;
}
background-color:transparent;
&:hover{
    color:var(--yellow);
}
`
export const Code = styled.div`
display: flex;
flex-direction:column;
background-color:var(--container);
padding:10px 20px;
border-radius:20px;
p {
    color:whistesmoke;
}
code {
    color:var(--white);
}
pre {
    color:var(--white);
}
`