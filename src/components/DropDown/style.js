import styled, { keyframes } from 'styled-components';
import { Icon } from 'components/common/Icon';

/*Animaçẽos usando keyframes*/

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const DivIcon = styled.a`
min-width:50px;
width:100%;
min-height:50px;
height:100%;
display:flex;
align-items:center;
justify-content: center;
cursor:pointer;
span {
    display:none;
    animation: ${FadeInAnimation} 2s;
    color:var(--white);
    transition:all 0.3s;
    padding:8px 20px;
    :hover{
        color: var(--blue);
    }
}

`

    

export const ContainerDropDown = styled.nav`
    background-color:var(--lightGray);

    height:100%;
    width:auto;
    display:flex;
    padding:0 5px;
    z-index:2;
    position: fixed;
    
    section {
        padding-bottom:10px;
        margin:0 auto;
        height:80%;
        width:60px;
        align-self:flex-end;
        display:flex;
        flex-direction: column;
        justify-content: center;
        gap:30px;
        transition:width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        
        ${DivIcon}:nth-last-child(1){
            margin-top:auto;
        }
      
    :hover {
        width:200px;

        ${DivIcon}{
            justify-content: flex-start;
        }
        span {
            display:block;
            
        }
    }   
    }

@media (max-width:900px){
    width:100vw ;
    height:100px;
    display:fixed;  
    bottom:0;
    
    section {
        width:100%;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding:10px 0;
        span {
            display:block;
            font-size:0.8rem;
            text-align:center;
        }
        ${DivIcon}{
            flex-direction: column;
    }

    :hover {
        width:100%;
        ${DivIcon}{
            justify-content: center;
        }
    }
    }

    ${DivIcon}:nth-last-child(1){
            margin-top:0;
        }
    
}

@media (max-width:560px){
    padding:0;
    height: 60px;
    section {
        gap:5px;
        padding:0;
    }
    ${Icon}{
        width:30px;
        height:30px;
    }
    
    ${DivIcon}{
        span {
            display:none;
        }
    }
    
    section:hover {
        ${DivIcon}{
        span {
            display:none;
        }
    }
    }
}
`;

