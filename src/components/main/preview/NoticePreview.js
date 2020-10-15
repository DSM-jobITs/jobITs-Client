import React from "react";
import NoticeList from "./NoticeList/NoticeList";
import * as S from "./style";

const NoticePreview = () => {
  return (
    <S.MainWrapper>
      <S.PreviewWrapper>
        <S.TopInner>
          <S.PreviewLabel>공지</S.PreviewLabel>
          <S.NoticeButton>
            <img src="/src/img/Plus.png" />
          </S.NoticeButton>
        </S.TopInner>
        <S.NoticeHeader>
          <S.HeaderInner>제목</S.HeaderInner>
          <S.HeaderInner>날짜</S.HeaderInner>
        </S.NoticeHeader>
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
      </S.PreviewWrapper>
    </S.MainWrapper>
  );
};

export default NoticePreview;
