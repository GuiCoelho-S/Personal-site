import styled from 'styled-components';

export const CardAnotacao = styled.article`
margin-top:30px;
width:100%;
max-width:600px;
background-color:#6c6c6c;
padding:10px 30px;
min-height:70px;
height:100%;
display:flex;
flex-direction:column;
justify-content: space-evenly;
border-radius:20px;

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