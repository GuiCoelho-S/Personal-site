
import styled, { keyframes } from 'styled-components';

/*********************************/
const rotateImg = keyframes`
    from{rotate:0};
    to{rotate:360deg};
`


export const ContainerColor = styled.div`
width:100%;
height:100%;
background-color: var(--gray);
`
export const ContainerHome = styled.div`
display:flex;
flex-direction:column;
padding-left:70px;
padding-bottom:200px;

@media (max-width:500px){
    padding-left:0;
}
`
export const Project = styled.article`
align-self:end;
height: 10vh;
padding:0;
padding-right:20px;
display: flex;
align-items: center;
gap:20px;
span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--white);
    display:grid;
    place-items: center;
}
p {
    font-size:1.2rem;
}
`
/*******************************/

export const conteudoMain = styled.div`

width:clamp(300px, 100%,1200px);
display: flex;
aside {
    width:clamp(200px,100%,400px);
    height: 70vh;
    display:grid;
    place-items: center;

    @media (max-width:560px){
        display:none;
    }
}
`
export const Info = styled.main`
    width:clamp(300px,100%,700px);
    gap:20px;
    display:flex;
    flex-direction:column;
    justify-content: start;

    * {
        padding:0 10px;
    }
    h1 {
        font-size:clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
    }
    h2 {
        color:var(--blue);
        font-size:clamp(1.4rem, -0.875rem + 8.333vw, 2rem);
        align-self: flex-end;
    }
    div {
        display:flex;
        gap:10px;
        align-items: center;

        svg {
            width:40px;
            height:40px;
        }
    }

    @media (max-width:1200px){
        :nth-child(n+1){
        padding-left:70px;
    }
    }
    @media (max-width:800px){
        padding-left:0px !important;
        
    }
`
/******************************* */


export const Image = styled.img`
    width:60%;
    height:60%;
    object-fit: contain;
    animation:${rotateImg} 5s infinite linear;
`
    
/***********************/

export const ViewMore = styled.aside`
align-self:end;
height: 20vh;
width:clamp(240px,90%, 340px);
position: relative;
display: flex;
align-items: center;
justify-content: end;
${Image} {
    width:70px;
    height:70px;
    animation:none;
}

@media (max-width:800px){
    padding-left: 0 !important;
}

@media (max-width:580px){
    margin-top:120px;
}
`
export const Ballon = styled.div`
border-style: double;
background-color: var(--white);
padding:0px 14px;
p {
    font-family: 'Orbitron', sans-serif;
    color:black;
}

`
/********************************* */
