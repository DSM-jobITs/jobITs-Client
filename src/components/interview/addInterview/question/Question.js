import React from "react";
import * as S from "./style";

const Question = () => {

  const onClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <S.Textarea placeholder="면접 질문을 입력해주세요" />
      {/* <S.Close type="submit" onClick={onClick} >
        <img src="/src/img/Close.png"></img>
      </S.Close> */}
      <S.Input name="interview" type="checkbox" id="interview" hidden/>
      <S.Label htmlFor="interview">기술면접</S.Label>
    </>
  );
};

export default Question;
