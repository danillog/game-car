import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timer from 'react.timer';
import Background from '../../components/Background';
import { Box, Form, Text, Title } from './style';


export default function Home(props){
  const [nick, setNick] = useState([]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState('');
  const [visible, setVisible] = useState();
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    setNick([...nick, input]);
    startGame();
  };

  function startGame(){
    setVisible( 'visible' )
    setCount(<Timer   countDown startTime={ 3 } />)
    setTimeout(function(){
      console.log("redireciona")
      history.push("/game")
    },3000)

  }
  //buscando
  useEffect(() => {
    const nickStorage = localStorage.getItem('Nick');
    console.log(nickStorage)
    if(nickStorage){
      setNick(JSON.parse(nickStorage));
    }
  },[]);

  //salvando nick
  useEffect(() => {
    localStorage.setItem('Nick', JSON.stringify(nick));
  },[nick]);



  return(
    <div>
      <Title> Game Car </Title>
      <Text> Enter your name  </Text>
      <Form onSubmit={handleSubmit}>  
        <input type="text" onChange={ e => setInput(e.target.value)} />
        <button type="submit" > Start game </button>
      </Form>
      <Box className={visible}>
        <h4>{ count }</h4>
      </Box>
      <Background />
    </div>
  )
}
