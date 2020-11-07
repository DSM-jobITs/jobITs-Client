import React,{useState} from 'react';
import * as S from "./style";

const EmpItem = ({question, answer, id, del}) => {
  const [isClick,setIsClick] = useState(false);
  const handleClick = ( ) => {
    (isClick) ? setIsClick(false) : setIsClick(true)
  }

  return (
    <>
      <S.Box>
        <S.Question onClick={handleClick}>{question}</S.Question>
        <S.Img src="/src/img/Dropdown.png" isClick={isClick}/>
        <S.CheckBox name="del" type="checkbox" id={id} hidden/>
        <S.Label htmlFor={id} isDel={del}></S.Label>
      </S.Box>
      <S.ExtendBox isClick={isClick}>
        <S.Answer>{answer}</S.Answer>
      </S.ExtendBox>
    </>
  );
};

export default EmpItem;