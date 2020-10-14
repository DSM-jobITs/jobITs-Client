import React from "react";
import * as S from "./style";
import 'babel-polyfill';
import NoticeBox from "./noticeBox/NoticeBox";

const Notice = () => {
  return (
    <S.MainWarpper>
      <S.Header>
        <S.Title>공지사항</S.Title>
        <S.SearchBox>
          <S.SearchForm>
            <S.SearchInput></S.SearchInput>
            <S.SearchIcon src="/src/img/Search.png"></S.SearchIcon>
          </S.SearchForm>
        </S.SearchBox>
      </S.Header>
      <S.NoticeWarpper>
        <S.NoticeHeader>
          <S.HeaderTitle>제목</S.HeaderTitle>
          <S.HeaderDate>등록일</S.HeaderDate>
        </S.NoticeHeader>
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
      </S.NoticeWarpper>
    </S.MainWarpper>
  );
};

export default Notice;
