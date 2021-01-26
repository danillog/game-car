import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from{
    top: 84%;
    left: 14%;  
  }
  to{
    top:-16%;
    left: 56%
  }
`;

export const Car = styled.img`
  position: absolute;
  animation: ${animate} 4s linear infinite;
  animation-delay: 5s;
  width: 30%;
`;

