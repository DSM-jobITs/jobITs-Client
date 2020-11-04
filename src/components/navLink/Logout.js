import React from 'react';
import {useHistory} from "react-router-dom"
import * as S from "./style"

const Logout = ({setIsLogin}) => {
  let history = useHistory();

  const goHome = () => {
    history.push("/");
    localStorage.removeItem("token");
    setIsLogin(false);
  }

  return (
    <S.Button onClick={goHome}>로그아웃</S.Button>
  );
};

export default Logout;