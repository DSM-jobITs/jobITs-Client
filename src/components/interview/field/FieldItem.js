import React from "react";
import * as S from "./ItemStyle";

const FieldItem = ({field}) => {

  const onClick = e =>{
    const {value} = e.target;
  }
  return (
    <>
      <S.Input onClick={onClick} name="field" type="radio" id={field} hidden/>
      <S.Label for={field}>{field}</S.Label>
    </>
  );
};

export default FieldItem;