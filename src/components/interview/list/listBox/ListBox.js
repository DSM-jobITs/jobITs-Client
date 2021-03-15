import React, {useState} from "react";
import * as S from "./style";
import axios from "axios";
import {baseUrl} from "../../../../constant/index"

const ListBox = ({content,createdAt,id,del}) => {

  const config = {
   
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
