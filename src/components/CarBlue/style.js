import styled from 'styled-components';

export const CarImage = styled.img`
  position: absolute;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1);
  
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