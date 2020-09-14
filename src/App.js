import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/navLink/Header";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  );
};

export default hot(module)(App);
