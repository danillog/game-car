import styled from 'styled-components';

export const Container = styled.div`
  &.play{
    display: none;
  }
  &.pause{
    display: block;
  }
`;
export const Title = styled.h1`
  font-family:'04b30', Arial;
  color: white;
  position: absolute;
  top: 12%;
  left: 5%;
  font-size: 4em;
  text-align: center;
  text-shadow: -10px 7px 0px #ff2f00;

`;

export const TextPause = styled.p`
  font-family: 'Minecraft', Arial, Helvetica, sans-serif;
  color: white;
  position: absolute;
  top: 22%;
  left: 0;
  font-size: x-large;
  text-align: center;
  text-shadow: -2px 2px 3px #ff2f00;   
`;