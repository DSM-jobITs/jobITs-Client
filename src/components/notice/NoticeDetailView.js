import React from 'react';
import * as S from "../employment/style"
import * as N from "./detailStyle"
import { Link } from "react-router-dom"

const NoticeItem = () => {
  return (
    <S.Warpper>
      <S.Header>
        <S.Title>공지사항</S.Title>
      </S.Header>
      <N.TitleBox>
        <N.Title>공지사항 제목입니다. 클릭 시 들어오게 됩니다.</N.Title>
        <N.Date>2020-10-28</N.Date>
      </N.TitleBox>
      <N.Viewer>
        <p>여기에 값이 들어갑니다</p>
      </N.Viewer>
      <N.FileBox>
        <N.P>첨부파일</N.P>
        <N.File>공지사항용.hwp</N.File>
      </N.FileBox>
    </S.Warpper>
  );
};

export default NoticeItem;