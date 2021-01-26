import React, { useEffect, useState } from 'react';
import { Text } from './styled';

export default function Laps(props){
  const [numLap, setNumLap] = useState(1);


  useEffect(() =>{

    let lapTime = setTimeout(()=>{
      setNumLap(numLap + 1);
    },10000)

    if(props.pause){
      clearTimeout(lapTime)
    }    
    if(numLap === 8 ){
      console.log('Fim de Jogo')
    }
  })

  return(
    <Text>
      {numLap}ª Volta    
    </Text>
  );
}