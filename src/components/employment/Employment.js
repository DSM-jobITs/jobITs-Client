import React, { useEffect, useState } from 'react';
import * as S from "./style"
import EmpItem from "./EmpItem"
import axios from "axios"
import "babel-polyfill"
import {Link} from "react-router-dom"
import { baseUrl } from "../../constant/index"

const Employment = () => {
  const [contents, setContents] = useState([]);
  const [isClick,setIsClick] = useState(false)
  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  const handleClick = ( ) => {
    isClick ? setIsClick(false) : setIsClick(true)
  }

  useEffect(()=>{ 
    axios.get(baseUrl + "employment/1",config)
    .then(response => {
      setContents(response.data.lists)
      console.log(localStorage.getItem("token"));
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
        {contents && contents.map(list => {
          return (
            <S.Div onClick={handleClick}>
              <EmpItem 
                question={list.question}
                answer={list.answer}
                key={list.id}
                isClick={isClick}
              />  
            </S.Div>
          );
        })}
      </S.Warpper>
  );
};

export default Employment;