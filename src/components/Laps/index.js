import React, { useEffect, useState } from 'react';
import { Text } from './styled';

export default function Laps(props){
  const [numLap, setNumLap] = useState(1);


  useEffect(() =>{

    let lapTime = setTimeout(()=>{
      setNumLap(numLap + 1);
    },5000)

    if(props.pause){
      clearTimeout(lapTime)
    }    
    if(numLap === 8 ){
      window.location.href ="http://localhost:3000/gameover"
    }
  })

  return(
    <Text>
      {numLap}ª Volta    
    </Text>
  );
}