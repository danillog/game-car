import React, { useEffect, useState } from 'react';
import { Text } from './styled';

export default function Laps(){
  const [numLap, setNumLap] = useState(1);

  useEffect(() =>{
    setTimeout(()=>{
      setNumLap(numLap + 1);
    },10000)

    // if(numLap === 3 ){
    //   console.log('Fim de Jogo')
    // }
  })

  return(
    <Text>
      {numLap}ª Volta    
    </Text>
  );
}