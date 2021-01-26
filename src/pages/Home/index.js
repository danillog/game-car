import React from 'react';
import Background from '../../components/Background';
import { Box, Form, Text, Title } from './style';

export default function Home(){
  return(
    <div>
      <Title> Game Car </Title>
      <Text> Enter your name  </Text>
      <Form> 
        <input   type="text"
          placeholder=""/>
        <button> Start </button>
      </Form>
      <Box>
        <h4>1</h4>
      </Box>
      <Background />
    </div>
  )
}
