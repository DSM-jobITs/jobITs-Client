import React from 'react';
import * as S from "./style"
import axios from "axios"
import "babel-polyfill"

const Password = () => {
  return (
    <S.Warpper>
      <S.Header>
        <S.Title>비밀번호 변경</S.Title>
      </S.Header>
      <S.Explain>
        <S.P>※   비밀번호는 최소 자 이내여야 합니다.</S.P>
        <S.P>※   로그인 후 새 비밀번호를 입력할 수 있습니다.</S.P>
      </S.Explain>
      <S.Form>
        <S.Div>
          <S.InputWarpper>
            <S.Text>아이디</S.Text>
            <S.Input name="userId"/>
          </S.InputWarpper>
          <S.InputWarpper>
            <S.Text>현재 비밀번호</S.Text>
            <S.Input type="password" name="currentPassword"/>
          </S.InputWarpper>
          <S.InputWarpper>
            <S.Text>새로운 비밀번호</S.Text>
            <S.Input type="password" name="newPassword"/>
          </S.InputWarpper>
          <S.InputWarpper>
            <S.Text>비밀번호 확인</S.Text>
            <S.Input type="password" name="checkPassword"/>
          </S.InputWarpper>
        </S.Div>
        <S.Submit type="submit">변경하기</S.Submit>
      </S.Form>
    </S.Warpper>
  );
};

export default Password;