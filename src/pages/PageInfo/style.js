import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  min-height:100vh;
  height:100%;
  display:flex;
  justify-content: space-between;
  position:relative;
  @media (max-width:1000px){
    flex-direction:column;

  }
`;

export const Header = styled.header`
padding:0 20px 0 20px;
width:200px;
height:auto;
display:flex;
flex-direction:column;
align-items:Center;
background-color: var(--lightGray);

article {
  padding-top:50px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;

}
p {
    text-align:Center;
  
}

@media (max-width:1000px){
  width:100%;
  flex-direction: row;
  height:auto;
  padding:0;
  article {
    flex-direction: row;  
    padding:0;
   
    div {
      width:clamp(400px,100%,500px);
    }
  }
  
@media (max-width:500px){

  article {
    div {
      width:75%;

      p {
        font-size:0.8rem;
      }
    }
  }
}

}

`
export const Section = styled.section`
height:100%;
width:300px;
position:relative;


`

export const ContainerMain = styled.div`
width:100%;
display:flex;
justify-content: space-between;
position:relative;
@media (max-width:900px){
  flex-direction: column;

  ${Section}{
    position:fixed;
    bottom:60px;
    width:100%;
    height:Auto;
    min-height:none !important;
  }
}

@media (max-width:550px){

  ${Section}{
    bottom:120px ;
  }
}
`


export const DevImg = styled.img`
width:200px;
height:200px;
border-radius:50%;
background-color: lightgrey;

@media (max-width:1000px){
  width:120px;
  height:120px;
}
@media (max-width:530px){
  width:80px;
  height:80px;
}
`

export const ContainerIcons = styled.aside`

width:100%;
display:flex;
justify-content:space-evenly;
height:auto;
cursor:pointer;
`

export const Icons = styled.a`
width:40px;
height:40px;
display:grid;
place-items:center;
outline:none;

svg {
  width:100%;
  height:100%;
}
`
