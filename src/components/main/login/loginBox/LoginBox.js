import { doc } from 'prettier';
import React from "react";
import * as S from "./style";
import axios from "axios";
import { baseUrl } from '../../../../constant/index'

const LoginBox = () => {

  const onLogin = () => {
    const loginInput = document.getElementById("loginInput").value;
    const passwordInput = document.getElementById("passWordInput").value;

    const data = {
      id : loginInput,
      password : passwordInput
    }
    axios.post(baseUrl + "login", data)
    .then((res) => {
      console.log(res);
      localStorage.setItem(res.data.accessToken);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <S.MainWrapper>
      <S.LoginName>welcome to the JobITs</S.LoginName>
      <S.LoginForm>
        <S.LoginInput placeholder="email" type="text" id="loginInput" />
        <S.LoginInput placeholder="password" type="password" id="passwordInput" />
        <S.SaveWarpper>
          <S.LoginSave type="checkbox" />
          <S.LoginSaveLabel>아이디 저장하기</S.LoginSaveLabel>
        </S.SaveWarpper>
        <S.LoginSubmit onClick={onLogin}>Log in</S.LoginSubmit>
      </S.LoginForm>
    </S.MainWrapper>
  );
};

export default LoginBox;
