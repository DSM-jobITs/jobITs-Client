import React, { useEffect, useState } from 'react';
import * as S from "./style"
import EmpItem from "./EmpItem"
import axios from "axios"
import "babel-polyfill"
import {Link} from "react-router-dom"
import { baseUrl } from "../../constant/index"

const Employment = () => {
  const [contents, setContents] = useState([]);

  useEffect(()=>{
    axios.get(baseUrl + "employment/1")
    .then(response => {
      setContents(response.data.lists)
    });
  },[])
  return (
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전</S.Title>
          <Link to="/addEmployment">
            <S.AddQuestion>추가하기</S.AddQuestion>
          </Link>
        </S.Header>
        {/* {contents && contents.map(list => {
          return (
            <EmpItem question={list.qestion}
            answer={list.answer}
            key={list.id} />
          );
        })} */}
        <EmpItem question="이것은 질문입니다" answer="이건 답변이구연"/>
      </S.Warpper>
  );
};

export default Employment;