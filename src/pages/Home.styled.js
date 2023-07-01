import styled from "styled-components";
import backgroundImage from "components/assets/background-image.jpg";

export const Container = styled.div`
  outline: 2px solid tomato;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  padding: 20px 10px;
  height: 100vh;
  background-size: cover;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  text-transform: uppercase;
  width: 800px;
  margin: 0 auto;

  text-shadow: 0 0 80 rgba (255, 255, 255, .5);
  background: url(https://i.ibb.co/RDTnNrT/Animated-text-fill.png);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;
  animayion: aitf 80s linear infinite;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

