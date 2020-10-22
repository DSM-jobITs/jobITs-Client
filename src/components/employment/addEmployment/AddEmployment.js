import React from 'react';
import * as S from "./style"

const AddEmployment = () => {
  return (
    <S.MainForm>
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전 등록</S.Title>
          <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.Header>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddEmployment;