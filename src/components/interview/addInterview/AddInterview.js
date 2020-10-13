import React from "react";
import Question from "./question/Question";
import * as S from "./style";

const AddInterview = () => {
  return (
    <S.MainWarpper>
      <S.InnerForm>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />

      </S.InnerForm>
      <S.InnerForm>mind</S.InnerForm>
    </S.MainWarpper>
  );
};

export default AddInterview;
