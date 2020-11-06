import React from "react";
import * as S from "./style";

const NoticeList = ({title,createdAt}) => {
  return (
    <S.NoticeInner>
      <S.NoticeList>{title}</S.NoticeList>
      <S.NoticeDate>{createdAt}</S.NoticeDate>
    </S.NoticeInner>
  );
};

export default NoticeList;
