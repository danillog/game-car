import React, { useEffect, useState } from 'react';
import Background from '../Background';
import CarBlue from '../CarBlue';

export default function Main(){
  const [position, setPosition] = useState('Middle');
  const [velocity, setVelocity] = useState('normal');
  
  function positionCar({ key}){
    if(key=== 'a' || key === 'A'){
      setPosition('Left')
    }else if( key === 's' || key === 'S' ){
      setPosition('Middle')
    }else if(key === 'd' || key === 'D'){
      setPosition('Right')
    }
  }

  useEffect(()=> {
    window.addEventListener('keydown', positionCar);
  },[])
  return(
    <>
      <Background />
      <CarBlue position={position} fast={velocity} />
    </>
  );
}