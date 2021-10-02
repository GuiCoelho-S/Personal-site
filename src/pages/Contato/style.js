import styled from 'styled-components';

export const ContainerColor = styled.div`
  width:100%;
  height:100%;
  background-color:whitesmoke;
`;

export const ContainerContato = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:40px;
form {
    width:clamp(240px, 100%, 600px);
    display:flex;
    flex-direction:column;
    gap:20px;
    
    div {
    display:flex;
    flex-direction: column;
    gap:5px;

    label {
        color:#222222;
    }
    input {
        height:35px;
        border:1px solid #eb3838;
        border-radius:6px;
        padding-left:8px;
        font-size:1rem;
        :focus{
            outline:1px solid blue;
            border:1px solid transparent;

        }
    }

    textarea{
        resize: none;
        min-height:160px;
        border:1px solid #eb3838;
        border-radius:6px;
        padding-left:8px;
        font-size:1rem;
        font-family:'Roboto';
        color:#2c2e2e;
        :focus{
            outline:1px solid blue;
            border:1px solid transparent;

        }
    }
}

}
h2 {
    color:#eb3838;
    font-size:2rem;
    font-style:bold;
    font-weight:400;
    font-family: 'Orbitron', sans-serif;
}

@media (max-width:500px){
    padding:0 20px;
}
`

export const SubmitBtn = styled.button`

width:200px;
height:50px;
border:1px solid transparent;
color:white;
background-color: red;
align-self:center;
font-size:1.3rem;
cursor:pointer;
transition:all 0.3s;
&:hover {
    background-color:white;
    color:red;
    border:1px solid red;

}
`