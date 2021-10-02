import styled from 'styled-components';


export const emptyDiv = styled.div`
width:100%;
padding-top:300px;


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
    border:1px solid #e46666;;
    width:270px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-evenly;

    svg {
        width:200px;
        height:200px;
        fill:var(--orange);

        &:hover {
            fill:var(--orange);
        }
    }

    p {
        color:black;
    }

    h3 {
        color:#e46666;
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
    color:var(--yellow);

}
`
export const ContainerColor = styled.div`
background-color:whitesmoke;
width:100%;
`

export const ContainerConteudo = styled.div`
display:flex;
flex-direction:column;
padding-bottom: 60px;

h2 {
    align-self:end;
    color:var(--blue);
    font-size:clamp(1.5rem, -0.875rem + 8.333vw, 2rem);


}
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

 @media (max-width:400px){
     gap:10px;

     ${Card}{
         width:150px;
         height:180px;
     }
 }
`