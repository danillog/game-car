import React from 'react';
import { Container, TextPause, Title } from './styled';

export default function Pause(props){
  return(
  <Container className={ props.pauseClass } >
    <Title> Game Car </Title>
    <TextPause> Game pause press 'ESC' to continue. </TextPause>
  </Container>
  )
}