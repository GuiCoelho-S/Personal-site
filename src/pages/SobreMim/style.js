import styled, { keyframes } from 'styled-components';
import { Container } from 'components/common/container';

/********************** */
const fadeIn = keyframes`
from{opacity:0;}
to{opacity:1;}
`



export const emptyDiv = styled.div`
width:100%;
padding-top:300px;

h2 {
    color:var(--blue);
    font-size:clamp(1.5rem, -0.875rem + 8.333vw, 2rem);

}

`
export const Cards = styled.section`
display:flex;
align-self:center;
width:auto;
justify-content: center;
align-items: center;
gap:10px;
flex-wrap:wrap;

`
export const Image = styled.div`
        width:300px;
        height:300px;

        svg {
            width:80%;
            height:80%;
        }
        
    
`
export const Img = styled.img`

width:150px;`

export const Card = styled.article`
    height:260px;
    border:1px solid blue;
    width:270px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-evenly;

    svg {
        width:200px;
        height:200px;
        fill:var(--orange);
    }

    p {
        color:black;
    }
`

export const Text = styled.p`
align-self:flex-start;
color:black;
padding-left:100px;
width:clamp(300px, 80%, 500px);
font-size:clamp(1.1rem, -0.875rem + 8.333vw, 1.4rem);

@media (max-width:800px){
    padding:0 20px;
}

h5 {
    font-size:1.4rem;
    color:var(--yellow)
}
`

export const ContainerColor = styled(Container)`
background-color:whitesmoke;
height: 100%;
padding-bottom: 60px;

${Text}:nth-child(2){
    align-self:start;
}
${Text}:nth-child(3){
    align-self:end;
    text-align:right;
    padding-right:20px;
}
${Text}:nth-child(4){
    width:clamp(300px, 90%, 900px);
}

@media (max-width:900px){
    padding-bottom: 120px;

}
`

export const TechCards = styled(Cards)`
    gap:40px;
    padding-left:70px;
 ${Card}{
     border:1px solid red;
     width:170px;
     height:170px;

     ${Img}{
        width:80px;
        
     }
 }

 @media (max-width:900px){
     padding-left:0;
 }
`