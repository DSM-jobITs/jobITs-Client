import React from "react";
import * as S from "./style";

const LoginBox = () => {
  return (
    <S.MainWrapper>
      <S.LoginName>welcome to the JobITs</S.LoginName>
      <S.LoginForm>
        <S.LoginInput placeholder="email" type="text" />
        <S.LoginInput placeholder="password" type="password" />
        <S.SaveWarpper>
          <S.LoginSave type="checkbox" />
          <S.LoginSaveLabel>아이디 저장하기</S.LoginSaveLabel>
        </S.SaveWarpper>
        <S.LoginSubmit>Log in</S.LoginSubmit>
      </S.LoginForm>
    </S.MainWrapper>
  );
};

export default LoginBox;
