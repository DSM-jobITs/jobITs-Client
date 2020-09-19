import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/navLink/Header";
import Login from "./components/main/login/Login";
import NoticePreview from "./components/main/preview/NoticePreview";
import Intro from "./components/main/intro/Intro";
import Footer from "./components/main/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Login />
      <NoticePreview />
      <Intro />
      <Footer />
    </BrowserRouter>
  );
};

export default hot(module)(App);
