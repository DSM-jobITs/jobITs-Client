import React from 'react';
import * as S from "./style";

const EmpItem = ({question, answer, isClick}) => {
  console.log(isClick)
  return (
    <>
      <S.Box>
        <S.Question>{question}</S.Question>
        <img src="/src/img/Dropdown.png"/>
      </S.Box>
      <S.ExtendBox isClick={isClick}>
        <S.Answer>{answer}</S.Answer>
      </S.ExtendBox>
    </>
  );
};

export default EmpItem;