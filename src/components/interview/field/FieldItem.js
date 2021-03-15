import React,{useState} from "react";
import * as S from "./ItemStyle";
import axios from 'axios';
import "babel-polyfill"

const FieldItem = ({fixField,fieldItem}) => {
  const [field,setField] =useState(fieldItem)
  const onClickField = () => {
    fixField(field)
  }
  return (
    <div onClick={onClickField}>
      <S.Input name="field" type="radio" id={fieldItem} hidden/>
      <S.Label htmlFor={fieldItem}>{field}</S.Label>
    </div>
  );
};

export default FieldItem;