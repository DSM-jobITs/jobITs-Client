import React from "react";
import Login from "../../../components/main/login/Login";

const LoginContainer = ({isLogin,setIsLogin}) => {
  return <Login isLogin={isLogin} setIsLogin={setIsLogin} />;
};

export default LoginContainer;
