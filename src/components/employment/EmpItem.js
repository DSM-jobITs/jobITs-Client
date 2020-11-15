import React from 'react';
import * as S from "./style";

const EmpItem = ({question, answer}) => {
  const handleClick = (e) => {
    
  }
  return (
    <>
      <S.Box>
        <S.Question onClick={handleClick}>{question}</S.Question>
        <img src="/src/img/Dropdown.png"/>
      </S.Box>
      <S.ExtendBox>
        <S.Answer>{answer}</S.Answer>
      </S.ExtendBox>
    </>
  );
};

export default EmpItem;