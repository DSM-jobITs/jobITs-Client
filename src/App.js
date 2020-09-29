import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import NavLinkContainer from "./containers/navLink/NavLinkContainer";
import AddInterview from "./components/interview/addInterview/AddInterview";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavLinkContainer />
      <AddInterview />
    </BrowserRouter>
  );
};

export default hot(module)(App);
