import React, { useEffect, useState } from 'react';
import * as S from "./style"
import EmpItem from "./EmpItem"
import axios from "axios"
import "babel-polyfill"
import {Link} from "react-router-dom"
import { baseUrl } from "../../constant/index"

const Employment = () => {
  const [contents, setContents] = useState([]);
  const [del,setDel] = useState(false);

  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };

  useEffect(()=>{ 
    axios.get(baseUrl + "employment",config)
    .then(response => {
      setContents(response.data.lists)
      console.log(localStorage.getItem("token"));
    });
  },[])

  const handleDelete = () => {
    setDel(!del)
  }

  return (
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전</S.Title>
          <div>
            <Link to="/addEmployment">
              <S.AddQuestion>추가하기</S.AddQuestion>
            </Link>
            <S.Delete onClick={handleDelete}>
              {del ? "선택 글 삭제" : "삭제하기"}
            </S.Delete>
          </div>
        </S.Header>
        {contents && contents.map(list => {
          return (
            <S.Div>
              <EmpItem 
                question={list.question}
                answer={list.answer}
                key={list.id}
                id={list.id}
                del={del}
              />  
            </S.Div>
          );
        })}
      </S.Warpper>
  );
};

export default Employment;
