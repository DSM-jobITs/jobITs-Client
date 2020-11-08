import React,{useState} from "react";
import * as S from "./style";

const Search = ({submitKeyword}) => {
  const [values,setValues] = useState(" ");

  const handleKeyword = (e) => {
    setValues(e.target.value);
  }

  submitKeyword(values)

  return (
    <S.MainWarpper>
      <S.SearchWarpper>
        <S.SearchForm>
          <S.SearchInput onChange={handleKeyword} placeholder="질문 검색" id="keyword"/>
          <S.SearchIcon src="src/img/Search.png" />
        </S.SearchForm>
      </S.SearchWarpper>
    </S.MainWarpper>
  );
};

export default Search;
