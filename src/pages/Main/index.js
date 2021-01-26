import React, { useEffect, useState } from 'react';
import Background from '../../components/Background';
import CarBlue from '../../components/CarBlue';
import Laps from '../../components/Laps';
import Pause from '../../components/Pause';

export default function Main(){
  const [position, setPosition] = useState('Middle');
  const [velocity, setVelocity] = useState('normal');
  const [gamePause, setGamePause] = useState(false);
  const [gameClass, setGameClass] = useState('play');

  const positionCar = (event) => {
    let key = event.key;

    if(gamePause && key==="Escape"){
      setGamePause(false);
      setGameClass('play');
    }else if(!gamePause){
      switch(key){
        default:
          break;      
        case 'a':
        case 'A':
          setPosition('Left');
        break;
        case 's':
        case 'S':
          setPosition('Middle');
        break;
        case 'd':
        case 'D':
          setPosition('Right');
        break;
        case 'ArrowLeft':
          arrowKeyLeft()
        break;
        case 'ArrowRight':
          arrowKeyRight()
        break;
        case 'Escape':
          setGamePause(true)
          setGameClass('pause')
          break;
      }
    }
  }

  function arrowKeyLeft(){
    if(position === 'Middle'){
      setPosition('Left');
      return;
    }
    if(position === 'Right'){
      setPosition('Middle');
      return;
    }
  }

  function arrowKeyRight(){
    if(position === 'Middle'){
      setPosition('Right');
    }else if(position === "Left"){
      setPosition('Middle');
    }
  }
  useEffect(()=> {
    window.addEventListener('keydown', positionCar);
    return () => {
      window.removeEventListener('keydown', positionCar);
    }
  },[position, gamePause, gameClass])
  return(
    <>
      <Pause pauseClass={ gameClass } />
      <Background />
      <Laps pause={ gamePause } />
      <CarBlue position={position} fast={velocity} />
    </>
  );
}