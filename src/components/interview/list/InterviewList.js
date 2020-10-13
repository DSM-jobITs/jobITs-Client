import React, { useState } from "react";
import axios from "axios";
import 'babel-polyfill';
import {Link} from "react-router-dom";
import ListBox from "./listBox/ListBox";
import * as S from "./style";

const InterviewList = () => {
  const [contents,setContents] = useState(null);
  let field = '분야 무관';
  let number = 30;

  const onClick = async () => {
    try{
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setContents(response.data);
    } catch(e){
      console.log(e);
    }
  };
  return ( 
    <S.MainWarpper>
      <S.ListWarppper>
        <S.FilterText>{field} ({number})</S.FilterText>
        <S.ListHeader>
          <S.HeaderTitle>면접</S.HeaderTitle>
          <S.HeaderDate>등록일</S.HeaderDate>
        </S.ListHeader>
        <S.ListInner>
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
        </S.ListInner>
        <Link to="/addInterview">
          <S.AddButton>질문 추가하기</S.AddButton>
        </Link>
      </S.ListWarppper>
      <div>
      <div>
        <button onClick={onClick}>qnffjdhrl</button>
      </div>
      {contents && <textarea rows={7} value={JSON.stringify(contents,null,2)} readOnly={true}  />}
    </div>
    </S.MainWarpper>
    
  );
};

export default InterviewList;
