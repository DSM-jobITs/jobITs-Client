import React, { useState,useEffect } from "react";
import axios from "axios";
import 'babel-polyfill';
import {Link} from "react-router-dom";
import ListBox from "./listBox/ListBox";
import * as S from "./style";
import { baseUrl } from '../../../constant/index';

const InterviewList = ({field,keyword}) => {
  const [contents,setContents] = useState([]);
  const [questLength,setQuestLength] = useState();
  const [page,setPage]=useState(1);
  const [errText,setErrText] = useState(null);
  const [del,setDel] = useState(false);
  const config = {
    
  };

  field = field ? field : "\'\'";
  useEffect(()=>{
    axios.get(baseUrl + "interview?page="+page+"&field="+field+"&keyword="+keyword,config)
    .then(response => {
      setContents(response.data.lists)
      setQuestLength(response.data.numOfQuestion);
      setErrText(null);
    })
    .catch(err => {
      setErrText("마지막 페이지 입니다.")
    })
  },[field,page,keyword])

  //field 변경 시 1페이지로 초기화
  useEffect(()=>{
    setPage(1);
  },[field])

  const onDeletePage = () => {
    if(page>1) setPage(state => state - 1);
  }

  const onAddPage = () => {
    if(errText == null) setPage(state => state + 1);
  }

  const handleDelete = () => {
    setDel(!del)
  }
  return ( 
    <S.MainWarpper>
      <S.ListWarppper>
        <S.FilterText>{field!="\'\'" ? field : "전체"} ({questLength})</S.FilterText>
        <S.ListHeader>
          <S.HeaderTitle>면접</S.HeaderTitle>
          <S.HeaderDate>등록일</S.HeaderDate>
        </S.ListHeader>
        <S.ListInner>
        {errText ? <S.ErrorMessage>{errText}</S.ErrorMessage> : contents && contents.map(list => {
          return (
            <ListBox content={list.content}
            createdAt={list.createdAt}
            key={list.id}
            id={list.id}
            del={del}
            />
          );
        })}
        </S.ListInner>
        <S.AddButton isAdd={false} onClick={handleDelete}>{del?"취소":"삭제"}</S.AddButton>
        <Link to="/addInterview">
          <S.AddButton isAdd={true}>질문 추가하기</S.AddButton>
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
