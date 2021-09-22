import styled from "styled-components"

export const Container = styled.div`
height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
position:relative;
`

export const ImgContainer = styled.div`
display:grid;
place-items:center;
right:15vh;
width:300px;
height:300px;

`
export const Content = styled.main`
width:100%;
height:100%;
position:Absolute;
left:0;
height:500px;
display:flex;
align-items:center;
justify-content:space-between;

section {
    display:flex;
    width:100%;
    padding:40px;
    justify-content: space-between;

    
    @media (max-width:980px){
    
    flex-direction:column;
    
    ${ImgContainer}{
        align-self:end;
        margin-left:auto;
    }
    @media (max-width:480px){
        padding:10px;
    }
}
}

`

export const DivMain = styled.div`
    align-self:flex-start !important;
    height:300px;

    @media (max-width:460px){
        width:100%;
        height:200px;
       
    }
`
export const Title = styled.h1`
align-self:start;
font-size:clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
color:var(--white);
margin:0 auto;
padding:10px 0;
`

export const showMore = styled.button`
width:160px;
height:40px;
border:none;
outline:none;
background-color:transparent;
display:flex;
justify-content: space-between;
align-items:center;
padding:0;
animation: moving 3s backwards infinite;

cursor:pointer;
p {
    font-weight: 100;
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);}
svg {
    scale:3;
    fill:var(--grey);
    padding:0;
}

@keyframes moving{
      0% {scale:1}
      50% {scale:1.05}
      100% {scale:1}
  }

  @media (max-width:680px){
      width:120px;
  }
  @media (max-width:450px){
      width:90px;
      svg {
          scale:2.2;
      }
  }
`

export const Informations = styled.article`
display:flex;
flex-direction:column;
justify-content: space-between;
position:relative;
width:clamp(300px,100%,520px);
animation: fadeIn 1.8s ease;
div {
    display:inline-flex;
    align-items:center;
    height:50px;
    width:400px;
    width:auto;
    p {
        font-size:clamp(0.8rem, -0.875rem + 5.333vw, 1.4rem);
        padding:0px 10px;
    }

    svg {
        width:30px;
        height:30px;
        
    }
}

@keyframes fadeIn{
    from{
        opacity:0;
    }
    to{
        opacity: 1;
    }
}
`
export const TitleTwo = styled.h2`
  font-size: clamp(1rem, -0.875rem + 8.333vw, 2.5rem);
  align-self:end;
  padding:0;
  color:var(--blue);
  font-weight:200px;
`

export const hidden = styled(showMore)`
width:50px;
height:50px;
position:absolute;
right:0;
bottom:0;
justify-content: center;
padding:5px;
animation:none;

svg {   
    width:40px;
    display:block;
    height:40px;
    scale:0.8;
}   

`

export const OtherPage = styled.button`

background-color:transparent;
border:none;
position:absolute;
height:80px;
width:80px;
left:20px;
bottom:0px;
padding:0;
cursor:pointer;
padding:10px;
border-radius:50%;
display:flex;
place-items:center;
svg {
    width:80px;
    height:40px;
    animation:scrolldown 2s linear infinite;
 }

@keyframes scrolldown {
    0%{transform:translateY(0)}
    50%{transform:translateY(20px)}
    100%{transform:translateY(0)
}}

`

export const TotalProjects = styled.article`
position:absolute;
top:20px;
right:20px;
display:inline-flex;
align-items:Center;

p {
    padding-right:20px;
}
`
export const Circle = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: var(--white);
display:grid;
place-items:center;
`