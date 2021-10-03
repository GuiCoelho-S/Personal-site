import styled from 'styled-components';

export const ContainerProjets = styled.div`
padding-bottom:40px;
width:100%;
max-width:1280px;
margin:0 auto;
padding-left:70px;
min-height:100vh;
display:flex;
flex-direction:column;
@media (max-width:900px){
  padding-left:20px;
  padding-bottom:120px;

}
@media (max-width:500px){
  padding-left:0 ;
}
`

export const Title = styled.h2`
display:block;
padding:0;
font-size:clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
color:var(--yellow);

`

export const Text = styled.p`
color:var(--white);
font-size:1.5rem;
text-align:center;
padding:0 30px;

@media (max-width:960px){
  text-align:start;
}
@media (max-width:700px){
  padding:0;
  font-size:1rem;
}
`

export const ContainerCards = styled.section`
align-self:center;
width:100%;
max-width:1000px;
display:grid;
justify-content: center;
grid-template-columns:repeat(auto-fit, minmax(300px,440px));
gap:20px;

`

export const Img = styled.img`
padding-top:8px;
width:60px;
height:60px;
display: block;
object-fit:contain;
`

export const SingleCard = styled.article`
padding:0px 20px 20px 20px;
display:flex;
flex-direction:column;
height:auto;
gap:5px;
border-radius:14px;
div {
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  gap:20px;
}
span {
    text-align:center;
  }

aside {
  ${Text}{
    text-align:left;
    font-size:1.1rem;
    padding:0;
  }
  ${Text} {
    @media (max-width:500px) {
        font-size:0.8rem;
    }
  }
  
  a {
    color:var(--orange);

    
  }
  
}

@media (max-width:500px) {
        a,span, ${Text} {
           
        font-size:0.8rem;
    
        }
    }
`

export const SingleCardReact = styled(SingleCard)`
background-color:#121212;
border:1px solid var(--blue);

* {
  font-variant:400;
}
h3 {
  color:var(--blue);
  font-weight:bold;
}
p {
  color:white;
  
}
a {
  color:#e74b29;
}
span {
  color:white;
}
`
export const SingleCardHTML = styled(SingleCardReact)`
border:1px solid var(--orange);

h3 {
  color:var(--orange);
}`
