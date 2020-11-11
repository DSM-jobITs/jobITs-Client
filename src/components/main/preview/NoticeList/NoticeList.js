import React from "react";
import * as S from "./style";
import axios from "axios";
import {Link} from "react-router-dom"

const NoticeList = ({title,createdAt,id}) => {
  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  return (
    <Link to={"notice/"+id,config} style={{textDecoration:"none"}}>
      <S.NoticeInner>
        <S.NoticeList>{title}</S.NoticeList>
        <S.NoticeDate>{createdAt}</S.NoticeDate>
      </S.NoticeInner>
    </Link>
  );
};

export default NoticeList;
