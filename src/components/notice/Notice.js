import React, { useState } from "react";
import * as S from "./style";
import axios from "axios"
import 'babel-polyfill';
import {Link} from "react-router-dom"
import NoticeBox from "./noticeBox/NoticeBox";
import { baseUrl } from "../../constant/index"

const Notice = () => {
  const [contents,setContents] = useState([]);
  const [page, setPage] = useState(1);
  const [errText, setErrText] = useState(null);
  const config = {
		headers: {
			Authorization:
				"Bearer " + localStorage.getItem("token"),
		},
	};
  useEffect(()=>{
    axios.get(baseUrl + "notice?page=" + page, config)
    .then(response => {
      setContents(response.data.lists);
      setErrText(null);
    })
    .catch(() => {
        setContents([]);
        setErrText("더이상 글이 없습니다.");
    })
  },[page])

  const onDeletePage = () => {
    if(page > 1) setPage(state => state - 1);
  }

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
        <S.ListInner>
          {contents && contents.map(list => {
            return (
              <NoticeBox 
                title={list.title}
                createdAt={list.createdAt}
                key={list.id}
                id={list.id}
                isAdmin={list.isAdmin}
              />
            );
          })}
          <N.ListContent err>
          {errText}
          </N.ListContent>
        </S.ListInner>
        <Link to="/addNotice">
          <S.AddButton>공지 추가하기</S.AddButton>
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
