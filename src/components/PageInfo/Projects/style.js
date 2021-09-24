import styled from 'styled-components';



export const ContainerCard = styled.div`

display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));


`

export const Card = styled.article`
position:relative;
flex:1 1 280px;
border:1px solid green;
background-color:#5b5f58;

flex-direction:column;
justify-content:space-evenly;
gap:5px;
border-radius:20px;

div {
    display:flex;
    flex-direction:column;
}
p {
    padding:0 20px;
    display:block;
    word-wrap:break-word;
}

a:hover{
    filter:brightness(3);
    box-shadow: inset 0 0 0.2em var(--blue);}



@media (max-width:1000px){
    width:300px;
}
`

export const CardReact = styled(Card)`
border:1px solid var(--blue);


h2 {
    color:var(--blue);
    width:200px;
    text-align:Center;
    overflow:hidden;
    text-overflow: ellipsis;
    padding-left:8px;
}


a {
    color:var(--orange);
    padding:10px ;
}

a:nth-child(3){
    color:var(--red);   
}

p {
    text-align:justify;
    line-height: 22px;
}
`

export const CardHtml = styled(CardReact)`
border:1px solid var(--yellow);

h2 {
    color:var(--orange);
}

a {
    color:var(--yellow);
    padding:10px ;
}

a:nth-child(2){
    color:var(--blue);   
}

`


export const iconImg = styled.img`
position:absolute;
top:15px;
right:10px;
width:55px;
height:55px;
object-fit:contain;
`
export const Data = styled.aside`
position:absolute;
top:80px;
right:10px;
color:white;
font-weight:bold;
font-size:0.8rem;
`

