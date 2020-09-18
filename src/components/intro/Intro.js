import React from "react";
import * as S from "./style";

const Intro = () => {
  return (
    <S.MainWrapper>
      <S.IntroImg src="/src/img/IntroImg.png" />
      <S.TextWarpper>
        <S.FirstText>대마고 학생들을 위한</S.FirstText>
        <S.MiddleText>기업 정보 소개 사이트</S.MiddleText>
        <S.LastText>
          더 이상 취업 고민은 그만! 자비스에서 여러분들에게 취업과
          <br /> 관련한 많은 정보를 제공해드립니다.
        </S.LastText>
      </S.TextWarpper>
    </S.MainWrapper>
  );
};

export default Intro;
