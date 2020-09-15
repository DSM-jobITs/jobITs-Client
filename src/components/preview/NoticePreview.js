import React from "react";
import NoticeList from "./NoticeList/NoticeList";
import * as S from "./style";

const NoticePreview = () => {
  return (
    <S.MainWrapper>
      <S.PreviewWrapper>
        <S.TopInner>
          <S.PreviewLabel>공지</S.PreviewLabel>
          <S.NoticeButton />
        </S.TopInner>
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
      </S.PreviewWrapper>
    </S.MainWrapper>
  );
};

export default NoticePreview;
