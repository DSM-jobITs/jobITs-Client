import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./containers/navLink/NavLinkContainer";
import Field from "./components/interview/field/Field";
import Search from "./components/interview/search/Search";
import InterviewList from "./components/interview/list/InterviewList";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Field />
      <Search />
      <InterviewList />
    </BrowserRouter>
  );
};

export default hot(module)(App);
