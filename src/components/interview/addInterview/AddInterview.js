import React,{useState} from "react";
import Question from "./question/Question";
import axios from "axios";
import 'babel-polyfill';
import * as S from "./style";
import {baseUrl} from "../../../constant/index"

const AddInterview = () => {
  const [q,setQ] = useState([]);

  const onClick = (e) => {
    e.preventDefault();
    axios.post(baseUrl+"interview");
  }

  const handleAddQue = (e) => {
    // e.preventDefault();
    // import("./question/Question").then(({Question})=>{
    //   const position = q.length + 1;
    //   console.log(position)
    //   const newQuestion = <Question key={position} />
    //   // setQ({q:[...q,newQuestion]})
    // })
  }

  return (
    <S.MainForm action="">
      <S.Warpper>
        <S.Header>
          <S.Title>면접 질문</S.Title>
          <S.SubmitBtn onClick={onClick}>등록하기</S.SubmitBtn>
          <S.FieldSelect>지원분야</S.FieldSelect>
          <S.SelectDrop>
          </S.SelectDrop>
        </S.Header>
        <S.InputWarpper>
        {/* {q.map(q => {q})} */}
        </S.InputWarpper>
        <S.AddInputBtn onClick={handleAddQue}>질문 추가하기</S.AddInputBtn>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddInterview;
