import React from 'react';
import * as S from "./style";

const EmpItem = () => {

  return (
    <>
      <S.Box>
        <S.Question>이건 박스!</S.Question>
        <img src="/src/img/Dropdown.png"/>
      </S.Box>
      <S.ExtendBox>
        <S.Answer>어찌되긴 머 잘되겠죠</S.Answer>
      </S.ExtendBox>
    </>
  );
};

export default EmpItem;