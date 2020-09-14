import React from "react";
import * as S from "./style";

const LoginBox = () => {
  return (
    <S.LoginWarp>
      <S.LoginName />
      <S.ID />
      <S.Password />
      <S.Submit />
    </S.LoginWarp>
  );
};

export default LoginBox;
