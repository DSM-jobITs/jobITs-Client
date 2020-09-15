import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/navLink/Header";
import Login from "./components/login/Login";
import NoticePreview from "./components/preview/NoticePreview";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Login />
      <NoticePreview />
    </BrowserRouter>
  );
};

export default hot(module)(App);
