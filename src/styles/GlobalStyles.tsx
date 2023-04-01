import { createGlobalStyle } from 'styled-components';
import img from "../assets/Background.png";

const GlobalStyle = createGlobalStyle`
  * {
//    font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif, 'Comic Sans', cursive;
    box-sizing: border-box;
  }
  body {
    background-image: url(${img});
    font-family: 'Comic Sans MS', cursive, sans-serif;

  }
`;

export default GlobalStyle;