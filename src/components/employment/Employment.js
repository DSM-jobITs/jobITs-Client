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
    axios.get(baseUrl + "employment",config)
    .then(response => {
      setContents(response.data.lists)
      console.log(localStorage.getItem("token"));
    });
  },[])

  return (
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전</S.Title>
          <div>
            <Link to="/addEmployment">
              <S.AddQuestion>추가하기</S.AddQuestion>
            </Link>
            <S.Delete>삭제하기</S.Delete>
          </div>
        </S.Header>
        {contents && contents.map(list => {
          console.log(list.id)
          return (
            <S.Div>
              <EmpItem 
                question={list.question}
                answer={list.answer}
                key={list.id}
                id={list.id}
              />  
            </S.Div>
          );
        })}
      </S.Warpper>
  );
};

export default Employment;
