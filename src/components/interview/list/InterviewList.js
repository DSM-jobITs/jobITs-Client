import React, { useState,useEffect } from "react";
import axios from "axios";
import 'babel-polyfill';
import {Link} from "react-router-dom";
import ListBox from "./listBox/ListBox";
import * as S from "./style";

const InterviewList = () => {
  const [contents,setContents] = useState([]);
  const [field,setField] = useState("");

  useEffect(()=>{
    axios.get("http://10.156.146.139:3000/interview?page=1").then(response => {
      setContents(response.data.lists)
    });
  },[])

  return ( 
    <S.MainWarpper>
      <S.ListWarppper>
        <S.FilterText>분야 무관 ({contents ? contents.length : 0})</S.FilterText>
        <S.ListHeader>
          <S.HeaderTitle>면접</S.HeaderTitle>
          <S.HeaderDate>등록일</S.HeaderDate>
        </S.ListHeader>
        <S.ListInner>
        {contents && contents.map(list => {
          return (
            <ListBox content={list.content}
            createdAt={list.createdAt}
            key={list.id} />
          );
        })}

        </S.ListInner>
        <Link to="/addInterview">
          <S.AddButton>질문 추가하기</S.AddButton>
        </Link>
      </S.ListWarppper>

    </S.MainWarpper>
  );
};

export default InterviewList;
