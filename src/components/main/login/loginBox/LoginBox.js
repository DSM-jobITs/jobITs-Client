import { doc } from 'prettier';
import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import "babel-polyfill"
import {baseUrl} from "../../../../constant/index"

const LoginBox = ({setIsLogin}) => {
  const [userId,setId] = useState("");
  const [userPassword,setPassword] = useState("");


  const onLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
    const data = {
      id: userId,
      password: userPassword
    }
    axios.post(baseUrl+"login",data)
    .then((res) => {
      console.log("hello");
      localStorage.token = res.data.accessToken;
      localStorage.setItem('token',res.data.accessToken);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <S.MainWrapper>
      <S.LoginName>welcome to the JobITs</S.LoginName>
      <S.LoginForm>
        <S.LoginInput 
          placeholder="email" 
          type="text"
          id="loginInput" 
          value={userId} 
          onChange={({target: {value}})=>setId(value)}
          required
          />

        <S.LoginInput 
          placeholder="password" 
          type="password" 
          id="passwordInput" 
          value={userPassword} 
          onChange={({target: {value}})=>setPassword(value)}
          required
          />

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
