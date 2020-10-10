import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import NavLinkContainer from "./containers/navLink/NavLinkContainer";
import Notice from "./components/notice/Notice";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavLinkContainer />
      <Notice />
    </BrowserRouter>
  );
};

export default hot(module)(App);
