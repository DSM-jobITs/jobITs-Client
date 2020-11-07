import React, { useState} from "react";
import FieldItem from "./FieldItem"
import * as S from "./style";
import axios from "axios";
import "babel-polyfill"
import { list} from "../../../constant/index"

const Field = ({submitField}) => {

  const [field, setField] = useState();
  const fixField = (field) => {
    setField(field);
  }

  submitField(field);
  return (
    <S.MainWarpper>
      <S.TextWarpper>
        <S.FirstText>지원 분야를 선택하세요</S.FirstText>
        <S.LastText>
          관심 분야 선택 시 해당 분야의 면접 문제를 볼 수 있습니다.
        </S.LastText>
      </S.TextWarpper>
      <S.FieldForm action="">
        {list.map(field => {
          return(
            <FieldItem fixField={fixField} key={field} fieldItem={field}/>
          )
        })}
      </S.FieldForm>
    </S.MainWarpper>
  );
};

export default Field;
