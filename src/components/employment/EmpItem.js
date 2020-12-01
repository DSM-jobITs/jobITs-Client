import axios from 'axios';
import React,{useState} from 'react';
import * as S from "./style";
import {baseUrl} from "../../constant/index"
import {useHistory, Switch, Route} from "react-router-dom"
import AddEmployment from './addEmployment/AddEmployment';

const EmpItem = ({question, answer, id, del}) => {
  const [isClick,setIsClick] = useState(false);
  const [isPostCheck,setIsPostCheck] = useState(false);

  const handleClick = ( ) => {
    (isClick) ? setIsClick(false) : setIsClick(true)
  }
  const config = {
    headers : { "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk"}
  };
  // const onCheckPost = () => {
  //   setIsPostCheck(!isPostCheck);
  // }
  
  const onPostDelete = () => {
    axios.delete(baseUrl+"employment/"+id,config)
    .then(res=>{
      alert("삭제되었습니다.");
      window.location.reload(true);
      console.log(res);
    })
  }

  const history = useHistory();

  return (
    <>
        <S.Img src="/src/img/Dropdown.png" isClick={isClick}/>
        <S.Label isDel={del} onClick={onPostDelete}>삭제</S.Label>
        {/* <S.CheckBox onClick={onCheckPost} click={isPostCheck} name="del" type="checkbox" id={id}/> */}
        {/* <S.Label htmlFor={id} isDel={del}></S.Label> */}
      </S.Box>
      <S.ExtendBox isClick={isClick}>
        <div>
        </div>
        <S.Modify>수정</S.Modify>
      </S.ExtendBox>
    </>
  );
};

export default EmpItem;