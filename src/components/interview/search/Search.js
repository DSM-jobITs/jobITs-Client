import React from "react";
import * as S from "./style";
import axios from "axios"
import "babel-polyfill"

const Search = () => {
  return (
    <S.MainWarpper>
      <S.SearchWarpper>
        <S.SearchForm>
          <S.SearchInput placeholder="질문 검색" />
          <S.SearchIcon src="src/img/Search.png" />
        </S.SearchForm>
      </S.SearchWarpper>
    </S.MainWarpper>
  );
};

export default Search;
