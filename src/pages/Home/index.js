import React, { useCallback, useEffect, useState } from 'react';
import Timer from 'react.timer';
import Background from '../../components/Background';
import { Box, Form, Text, Title } from './style';

export default function Home(){
  const [nick, setNick] = useState('');
  const [input, setInput] = useState('');
  const [count, setCount] = useState('');
  const [visible, setVisible] = useState('visible');
 
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setNick(input);
    startGame();
  },[input, nick]);

  function startGame(){
    setCount(<Timer   countDown startTime={ 3 } />)
    setTimeout(function(){
      window.location.href ="http://localhost:3000/game"
    },3000)

  }


  useEffect(() => {
    localStorage.setItem('Nick', JSON.stringify(nick));
  },[nick]);

  return(
    <div>
      <Title> Game Car </Title>
      <Text> Enter your name  </Text>
      <Form onSubmit={handleSubmit}>  
        <input type="text" onChange={ e => setInput(e.target.value)} />
        <button type="submit" > Start </button>
      </Form>
      <Box className={visible}>
        <h4>{ count }</h4>
      </Box>
      <Background />
    </div>
  )
}
