import React, { useState,useEffect } from "react";
import axios from "axios";
import 'babel-polyfill';
import {Link} from "react-router-dom";
import ListBox from "./listBox/ListBox";
import * as S from "./style";
import { baseUrl } from '../../../constant/index';

const InterviewList = ({field,keyword}) => {
  const [contents,setContents] = useState([]);
  // const [fields,setFields] = useState(field);
  // const [keywords,setKeywords] = useState();
  const [page,setPage]=useState(1);

  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  useEffect(()=>{
    axios.get(baseUrl + "interview?page="+page+"&field="+field+"&keyword="+keyword,config)
    .then(response => {
      setContents(response.data.lists)
    });
  },[field,page,keyword])

  const onDeletePage = () => {
    if(page>1) setPage(state => state - 1);
  }

  const onAddPage = () => {
    setPage(state => state + 1);
  }
  return ( 
    <S.MainWarpper>
      <S.ListWarppper>
        <S.FilterText>{field ? field : "분야 무관"} ({contents ? contents.length : 0})</S.FilterText>
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
      <S.PageNum>
        <S.Button onClick={onDeletePage}>
          <img src="src/img/Left.png"/>
        </S.Button>
        <S.P>{page}</S.P>
        <S.Button onClick={onAddPage}>
        <img src="src/img/Right.png"/>
        </S.Button>
      </S.PageNum>
    </S.MainWarpper>
  );
};

export default InterviewList;
