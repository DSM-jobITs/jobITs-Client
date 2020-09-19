import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import MainContainer from "./containers/MainContainer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainContainer />
    </BrowserRouter>
  );
};

export default hot(module)(App);
