import React,{useState} from "react";
import axios from "axios";
import 'babel-polyfill';
import * as S from "./style";
import {baseUrl,list} from "../../../constant/index"
import {useHistory} from "react-router-dom"

const AddInterview = () => {
  const [tech,setTech] = useState(false);
  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };

  const onClickTech = () => {
    setTech(!tech);
  }

  const onClick = (e) => {
    e.preventDefault();
    const s = document.getElementById("field");
    const v = document.getElementById("textarea");
    const field = s.options[s.selectedIndex].value;
    const contents = v.value;
    const data = {
      contents: contents,
      field: field
    }
    axios.post(baseUrl+"interview",data,config)
    .then(res=>{
      alert("면접질문을 등록하였습니다.")
      history.push("/interview?page=1")
    })
  }

  const history = useHistory();

  // const handleAddQue = (e) => {
  //   // e.preventDefault();
  //   // import("./question/Question").then(({Question})=>{
  //   //   const position = q.length + 1;
  //   //   console.log(position)
  //   //   const newQuestion = <Question key={position} />
  //   //   // setQ({q:[...q,newQuestion]})
  //   // })
  // }

  return (
    <S.MainForm action="">
      <S.Warpper>
        <S.Header>
          <S.Title>면접 질문</S.Title>
          <S.SubmitBtn onClick={onClick}>등록하기</S.SubmitBtn>
          <S.FieldSelect>지원분야</S.FieldSelect>
          <S.SelectDrop name="field" id="field">
          {list.map(field=>{
            return(
              <option id={field} value={field}>{field}</option>
            )
          })}
          </S.SelectDrop>
        </S.Header>
        <S.InputWarpper>
          {/* <Question></Question> */}
          <S.Textarea id="textarea" placeholder="면접 질문을 입력해주세요" />
          <S.Input name="interview" type="checkbox" id="interview" hidden/>
          <S.Label htmlFor="interview" onClick={onClickTech} tech={tech}>기술면접</S.Label>
        </S.InputWarpper>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddInterview;
