import React, {useState} from "react";
import * as S from "./style";
import axios from "axios";
import {baseUrl} from "../../../../constant/index"

const ListBox = ({content,createdAt,id,del}) => {

  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  const onPostDelete = () => {
    console.log(id);
    axios.delete(baseUrl+"interview/"+id,config)
    .then(res=>{
      alert("삭제되었습니다.");
      window.location.reload(true);
      console.log(res);
    })
    .catch(err=>{
      alert("왜 안되는겁니까");
    })
  }

  return (
    <S.List>
      <S.ListContent>
        {content}
      </S.ListContent>
      <S.ListDate>{createdAt}</S.ListDate>
      <S.Label isDel={del} onClick={onPostDelete}>삭제</S.Label>
    </S.List>
  );
};

export default ListBox;
