import styled from 'styled-components';

export const CarImage = styled.img`
  position: absolute;
  transition: 0.5s;
  box-shadow:8px 10px 15px 3px #00000078;
  
  &.Left{
    left: 23%;
  }
  &.Middle{
    left: 45%;
  }
  &.Right{
    left: 65%;
  }
  &.speedUp{
    top: 44%;
  }
  &.normal{
    top: 80%; 
  }
`;