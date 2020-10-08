import React, { useState } from "react";
import Question from "../question/Question";
import * as S from "./style";

const Mind = () => {
  return (
    <S.MainWarpper>
      <S.Title>
        <S.TitleText>인성 면접 질문</S.TitleText>
        <S.TitleSubmit type="submit">등록하기</S.TitleSubmit>
      </S.Title>
      <S.AddBox>
        <Question />
      </S.AddBox>
      <S.AddQuestion>질문 추가하기</S.AddQuestion>
    </S.MainWarpper>
  );
};

export default Mind;
