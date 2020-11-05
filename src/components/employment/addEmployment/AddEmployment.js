import React, { useState } from 'react';
import * as S from "./style"
import axios from "axios"
import "babel-polyfill"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../../constant/index"

const AddEmployment = () => {
  const [question,setQuestion] = useState("");
  const [answer,setAnswer] = useState("");
  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      question: question,
      answer: answer
    }
    axios.post(baseUrl + "employment",data,config)
    .then((res)=>{
      console.log(res);
      alert("성공적으로 등록되었습니다.");
      history.push("/employment");
    }).catch(err=>{
      console.log(err);
    })
    
  }

  let history = useHistory();

  const handleQuestion = (e) => {
    setQuestion(e.target.value)
  }

  const handleAnswer = (e) => {
    setAnswer(e.target.value)
  }
  return (
    <S.MainForm onSubmit={handleSubmit}>
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전 등록</S.Title>
          <S.SubmitBtn type="submit" value="등록하기"></S.SubmitBtn>
        </S.Header>
        <S.TextArea type="text"
                    name="question" 
                    placeholder="질문을 입력해주세요"
                    value={question}
                    onChange={handleQuestion}
        />
        <S.TextArea type="text" 
                    name="answer" 
                    placeholder="답변을 입력해주세요"
                    onChange={handleAnswer}
        />
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddEmployment;