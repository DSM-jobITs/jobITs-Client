import React,{useState} from "react";
import * as S from "./style";
import axios from "axios"
import "babel-polyfill"

const Search = ({submitKeyword}) => {
  const [keyword,setKeyword] = useState();
  const fixKeywords = (keyword) => {
    setKeyword(keyword);
  }

  return (
    <S.MainWarpper>
      <S.SearchWarpper>
        <S.SearchForm>
          <S.SearchInput placeholder="질문 검색" id="keyword"/>
          <S.SearchIcon src="src/img/Search.png" />
        </S.SearchForm>
      </S.SearchWarpper>
    </S.MainWarpper>
  );
};

export default Search;
