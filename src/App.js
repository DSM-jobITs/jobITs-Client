import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/navLink/Header"
import MainContainer from "./containers/MainContainer"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  );
};

export default hot(module)(App);
