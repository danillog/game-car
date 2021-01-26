import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from './styled';

export default function Laps(props){
  const [numLap, setNumLap] = useState(1);
  const history = useHistory();

  useEffect(() =>{

    let lapTime = setTimeout(()=>{
      setNumLap(numLap + 1);
    },5000)

    if(props.pause){
      clearTimeout(lapTime)
    }    
    if(numLap === 8 ){
      
      history.push("/gameover")
    }
  })

  return(
    <Text>
      {numLap}ª Volta    
    </Text>
  );
}