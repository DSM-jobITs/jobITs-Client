import React from "react";
import * as S from "./style";

const LoginBox = () => {
  return (
    <S.MainWrapper>
      <S.LoginName>LOGIN</S.LoginName>
      <S.LoginWrapper>
        <S.LoginLabel>ID</S.LoginLabel>
        <S.LoginInput type="text" />
        <S.LoginLabel>Password</S.LoginLabel>
        <S.LoginInput type="password" />
        <S.LoginSave>아이디 저장하기</S.LoginSave>
        <S.LoginSubmit>로그인</S.LoginSubmit>
      </S.LoginWrapper>
    </S.MainWrapper>
  );
};

export default LoginBox;
