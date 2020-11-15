import React,{useState} from "react";
import Question from "./question/Question";
import axios from "axios";
import 'babel-polyfill';
import * as S from "./style";
import {junUrl} from "../../../constant/index"

const AddInterview = () => {
  const [question,setQuestion] = useState(1);

  const onClick = (e) => {
    e.preventDefault();
    setQuestion(question + 1);
    const hello=['hello','hieieoow'];
    const tlqkf = {
      contents:hello,
      field:"test"
    }
    axios.post(junUrl+"interview",tlqkf);
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
        <Question/>
        </S.InputWarpper>
        <S.AddInputBtn onClick={onClick}>질문 추가하기</S.AddInputBtn>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddInterview;
