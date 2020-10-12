import React from "react";
import {Link} from "react-router-dom"
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
        <Link to="/addInterview">
          <S.AddButton>질문 추가하기</S.AddButton>
        </Link>
      </S.ListWarppper>
    </S.MainWarpper>
  );
};

export default InterviewList;
