import styled from 'styled-components';

export const ContainerColor = styled.div`
  width:100%;
  height:100%;
  background-color:${(props) => props.color};


`;

export const Container = styled.div`
margin:0 auto;
width:100%;
max-width:1280px;
height:100%;
`