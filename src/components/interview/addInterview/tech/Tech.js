import React from "react";
import Question from "../question/Question";
import * as S from "./style";

const Tech = () => {
  return (
    <S.MainWarpper>
      <S.Title>
        <S.TitleText>기술 면접 질문</S.TitleText>
        <S.TitleSubmit type="submit">등록하기</S.TitleSubmit>
        <S.Field>지원분야</S.Field>
        <label for="fields"></label>
        <S.SelectBox name="fields">
          <option value="front">프론트엔드</option>
          <option value="back">백엔드</option>
          <option value="and">안드로이드</option>
          <option value="game">게임</option>
          <option value="sec">보안</option>
        </S.SelectBox>
      </S.Title>
      <S.AddBox>
        <Question />
      </S.AddBox>
      <S.AddQuestion>질문 추가하기</S.AddQuestion>
    </S.MainWarpper>
  );
};

export default Tech;
