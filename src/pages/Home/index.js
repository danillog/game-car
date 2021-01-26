import React from 'react';
import Background from '../../components/Background';
import { Title } from './style';

export default function Home(){
  return(
    <div>
      <Title> Game Car </Title>
      {/* <Form> 
        <Text> Enter your name  </Text>
        <input   type="text"
          placeholder="Adicionar Repositorios"/>
      </Form> */}
      <Background />
    </div>
  )
}
