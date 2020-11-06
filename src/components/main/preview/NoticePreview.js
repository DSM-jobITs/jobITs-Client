import React, { useEffect, useState } from "react";
import NoticeList from "./NoticeList/NoticeList";
import * as S from "./style";
import axios from "axios"
import "babel-polyfill"
import {baseUrl} from "../../../constant/index"

const NoticePreview = () => {
  const [contents,setContents] = useState([]);
  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  useEffect(()=>{
    axios.get(baseUrl + "notice?page=1",config)
    .then(response => {
      setContents(response.data.lists)
    });
  },[])

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
        {contents && contents.map(list => {
          return(
            <NoticeList
              key={list.id}
              title={list.title}
              createdAt={list.createdAt}
            />
          )
        })}
      </S.PreviewWrapper>
    </S.MainWrapper>
  );
};

export default NoticePreview;
