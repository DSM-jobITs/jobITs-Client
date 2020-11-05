import React, { Fragment,useState } from "react";
import PreviewContainer from "./main/preview/PreviewContainer";
import LoginContainer from "./main/login/LoginContainer";
import IntroContainer from "./main/intro/IntroContainer";
import FooterContainer from "./main/footer/FooterContainer";

const MainContainer = ({isLogin,setIsLogin}) => {
  {console.log(isLogin)}
  return (
    <Fragment>
      <LoginContainer isLogin={isLogin} setIsLogin={setIsLogin}/>
      <PreviewContainer />
      <IntroContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default MainContainer;
