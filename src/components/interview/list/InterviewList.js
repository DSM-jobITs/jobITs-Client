import React from "react";
import ListBox from "./listBox/ListBox";
import * as S from "./style";

const InterviewList = () => {
  return (
    <S.MainWarpper>
      <S.ListWarppper>
        <S.FilterText>분야 무관 (120)</S.FilterText>
        <S.ListHeader>
          <S.HeaderTitle>질문</S.HeaderTitle>
          <S.HeaderDate>등록일</S.HeaderDate>
        </S.ListHeader>
        <S.ListInner>
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
        </S.ListInner>
      </S.ListWarppper>
    </S.MainWarpper>
  );
};

export default InterviewList;
