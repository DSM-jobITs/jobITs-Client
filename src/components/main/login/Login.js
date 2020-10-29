import React from "react";
import LoginBox from "./loginBox/LoginBox";
import MainBox from "./MainBox/MainBox";
import * as S from "./style";

const Login = () => {
  return (
    <S.ContentWarp>
      {/* <LoginBox /> */}
      <MainBox />
    </S.ContentWarp>
  );
};

export default Login;
