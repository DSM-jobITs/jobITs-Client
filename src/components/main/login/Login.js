import React from "react";
import LoginBox from "./loginBox/LoginBox";
import MainBox from "./MainBox/MainBox";
import * as S from "./style";

const Login = ({isLogin, setIsLogin}) => {

  const login = localStorage.getItem("token");
  return (
    <S.ContentWarp>
    {login ?
      <MainBox /> : <LoginBox setIsLogin={setIsLogin} /> }
    </S.ContentWarp>
  );
};

export default Login;
