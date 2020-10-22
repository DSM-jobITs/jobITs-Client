import React from 'react';
import * as S from "./style"
import axios from "axios"

const AddEmployment = () => {
  return (
    <S.MainForm>
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전 등록</S.Title>
          <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.Header>
        <S.TextArea placeholder="질문을 입력해주세요"></S.TextArea>
        <S.TextArea placeholder="답변을 입력해주세요"></S.TextArea>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddEmployment;