import React, { useState } from "react";
import * as S from "./style";
import axios from "axios"
import 'babel-polyfill';
import {Link} from "react-router-dom"
import NoticeBox from "./noticeBox/NoticeBox";
import { baseUrl } from "../../constant/index"

const Notice = () => {
  const [contents,setContents] = useState([]);

  // useEffect(()=>{
  //   axios.get(baseUrl + "/notice")
  //   .then(response => {
  //     setContents(response.data.lists)
  //   });
  // },[])

  return (
    <S.MainWarpper>
      <S.Header>
        <S.Title>공지사항</S.Title>
        <S.SearchBox>
          <S.SearchForm>
            <S.SearchInput></S.SearchInput>
            <S.SearchIcon src="/src/img/Search.png"></S.SearchIcon>
          </S.SearchForm>
        </S.SearchBox>
      </S.Header>
      <S.NoticeWarpper>
        <S.NoticeHeader>
          <S.HeaderTitle>제목</S.HeaderTitle>
          <S.HeaderDate>등록일</S.HeaderDate>
        </S.NoticeHeader>
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <Link to="/addNotice">
        <S.AddButton>질문 추가하기</S.AddButton>
      </Link>
      </S.NoticeWarpper>
      
      <S.PageNum>
        <S.Button>
          <img src="src/img/Left.png"/>
        </S.Button>
        <S.P>{1}</S.P>
        <S.Button>
        <img src="src/img/Right.png"/>
        </S.Button>
      </S.PageNum>
    </S.MainWarpper>
  );
};

export default Notice;
