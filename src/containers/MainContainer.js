import React, { Fragment } from "react";
import PreviewContainer from "./main/preview/PreviewContainer";
import LoginContainer from "./main/login/LoginContainer";
import IntroContainer from "./main/intro/IntroContainer";
import FooterContainer from "./main/footer/FooterContainer";

const MainContainer = () => {
  return (
    <Fragment>
      <LoginContainer />
      <PreviewContainer />
      <IntroContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default MainContainer;
