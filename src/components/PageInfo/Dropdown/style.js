import styled from 'styled-components';
import { Icon } from 'components/common/Icon';

export const DropDownStyle = styled.div`
  
  background-color:var(--white);
  width:180px;
  border-radius:0 0 0 60px;
  position:Absolute;
  top:0;
  right:0;
  display:flex;
  flex-direction:column;
  justify-content:Start;
  gap:10px;
  padding:70px 10px 20px 20px;

  li {
      display:grid;
      place-items:center;
  }

@media (max-width:900px){
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;
    padding:0;
    border-radius:0;
    justify-content:space-evenly;
}
`;

export const HiddenDropDown = styled(Icon)`
top:5px;
right:5px;
svg {
    fill:var(--grey);
}
@media (max-width:900px){
    display:none;
}
`

export const Link = styled.button`

background-color:transparent;
border:1px solid transparent;
display:flex;
padding:0;
transition: box-shadow 1.5s ease;
transition-delay:0.3s;
width:180px;
p {
    text-align:center;
    color:var(--grey);
    font-size:1.2rem;
    transition:all 1s;
    padding:0;
    width:100%;
}



&:hover{

    box-shadow:1px 1px 0px var(--blue);
    p{
        color:var(--blue);
    }
 
}

@media (max-width:900px){
    width:100%;
    padding:0 20px;
    height:60px;
    align-items: center;
    p {
        font-size:clamp(0.7rem,1vh,1.2rem);
    }
}
`