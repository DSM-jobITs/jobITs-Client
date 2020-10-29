import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a847ff;
    }
    &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    }
  }

  * {
    outline: none;
    border: none;
  }

  *::selection {
    background-color: #7f27cf;
    color: #ffffff;
  }

  button {
    border: none;
    cursor:pointer;
  }
`;
