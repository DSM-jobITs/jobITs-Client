import React from "react";
import * as S from "./ItemStyle";

const FieldItem = ({field}) => {

  return (
    <>
      <S.Input name="field" type="radio" id={field} hidden/>
      <S.Label htmlFor={field}>{field}</S.Label>
    </>
  );
};

export default FieldItem;