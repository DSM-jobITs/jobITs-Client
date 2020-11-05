import React from "react";
import LoginBox from "./loginBox/LoginBox";
import MainBox from "./MainBox/MainBox";
import * as S from "./style";

const Login = ({isLogin, setIsLogin}) => {
  {console.log(isLogin)}
  return (
    <S.ContentWarp>
    {isLogin ?
      <MainBox /> : <LoginBox setIsLogin={setIsLogin} /> }
    </S.ContentWarp>
  );
};

export default Login;
