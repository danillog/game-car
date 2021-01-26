import React from 'react';
import carRed from '../../assets/images/CarRed.png';
import { Car } from './style';

export default function CarRed(){
  return(
    <div>
      <Car src={carRed} alt="Carro de passagem"/>
    </div>
  );
}