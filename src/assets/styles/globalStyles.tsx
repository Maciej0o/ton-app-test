import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Galindo;
  src: url('/fonts/Galindo-Regular.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: BabyDoll;
  src: url('/fonts/Baby-Doll.ttf') format('truetype');
  font-weight: normal;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    min-height: 100vh;
  }
  body, #root{
    min-height: 100vh;
    width: 100%;
    color: #000;
    background-color: #ffffff;
    font-family: Galindo, sans-serif;
  }
  #root {
    display:flex;
    flex-direction:column;
    position: relative;
    overflow-x: hidden;
  }
  .main {
    overflow: hidden;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  ul {
    list-style-type: none;
  }
  button {
    background-color: #FFFFFF;
    color: #000000;
    padding: 8px 16px;
    border: none;
    font-family: BabyDoll, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }
  .padding-section {
    padding-left: 124px;
    padding-right: 124px;
  }
`;
