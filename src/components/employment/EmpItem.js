import React,{useState} from 'react';
import * as S from "./style";

const EmpItem = ({question, answer, id}) => {
  const [isClick,setIsClick] = useState(false);
  const handleClick = ( ) => {
    (isClick) ? setIsClick(false) : setIsClick(true)
  }

  return (
    <>
      <S.Box>
        <S.Question onClick={handleClick}>{question}</S.Question>
        <S.Img src="/src/img/Dropdown.png" isClick={isClick}/>
      </S.Box>
      <S.ExtendBox isClick={isClick}>
        <S.Answer>{answer}</S.Answer>
      </S.ExtendBox>
    </>
  );
};

export default EmpItem;