import React from 'react';
import Background from '../../components/Background';
import { Text, Title } from './style';

export default function GameOver(){
  // const [nicks, setNicks] = useState([]);


  // useEffect(() => {
  //   localStorage.setItem('Nick', JSON.stringify(nick));
  // },[nick]);

  return(
    <div>
      <Title> Game Car </Title>
      <Text> List of players  </Text>
      <ul>
        <li>
          <h3> nome </h3>
          <p> pontuação </p>
        </li>
      </ul>
      <Background />
    </div>
  )
}
