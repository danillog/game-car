import React from 'react';
import carPlayer from '../../assets/images/carBlue.png';
import { CarImage } from './style';

export default function CarBlue(){
  return(
    <div>
      <CarImage src={carPlayer} alt="Carro do jogador"  className=" Left normal"/>
    </div>
  );
}