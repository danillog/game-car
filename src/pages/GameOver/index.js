import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import { ButtonAgain, List, Text, Title } from './style';

export default function GameOver(){
  const [nicks, setNicks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const nickStorage = localStorage.getItem('Nick');
    console.log(nickStorage)
    if(nickStorage){
      setNicks(JSON.parse(nickStorage));
    }
  },[]);
  function playAgain(){
    history.push("/")
  }

  return(
    <div>
      <Title> Game Car </Title>
      <Text> List of players  </Text>
      <List>
        {
          nicks.map(nick =>(
            <li key={nick.id} >
              <h3> { nick } </h3>
            </li>
          ))
        }
      </List>
      <ButtonAgain onClick={playAgain } >
        Play Again
      </ButtonAgain>
      <Background />
    </div>
  )
}
