import React,{useState} from "react";
import 'babel-polyfill';
import * as S from "./style";

const AddNotice = () => {
  return (
    <S.MainForm action="">
      <S.Warpper>
        <S.Header>
          <S.Title>공지사항</S.Title>
        </S.Header>
        <S.InputWarpper>
        <div>
          작성
        </div>
        <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.InputWarpper>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddNotice;
