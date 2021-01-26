import styled from 'styled-components';

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

export const Text = styled.p`
  font-family: 'Minecraft', Arial, Helvetica, sans-serif;
  color: white;
  position: absolute;
  top: 22%;
  left: 27%;
  font-size: x-large;
  text-shadow: -2px 2px 3px #ff2f00;   
`;

export const Form = styled.form`
  position: absolute;
  top: 30%;
  left: 28%;
  font-family:'Minecraft', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;

  button{
    margin-top: 10px;
    background-color: yellow;
    font-family:'Minecraft', Arial, Helvetica, sans-serif;
  }
`;
export const Box = styled.div`
  position: absolute;
  background-color: #ff2f00;
  border-radius: 50%;
  top: 50%;
  left: 33%;
  width: 147px;
  height: 147px;
  display:none;

  &.visible{
    display:block;
  }
  h4{
    color: white;
    font-size: xxx-large;
    font-family: '04b30';
    position: absolute;
    top: 33%;
    left: 40%;
  }
`;