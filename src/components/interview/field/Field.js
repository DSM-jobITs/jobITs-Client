import React from "react";
import FieldItem from "./FieldItem"
import * as S from "./style";

const Field = () => {

  const fieldList = [
    '프론트엔드',
    '백엔드',
    '데이터베이스',
    '보안',
    '게임',
    '안드로이드',
    '공무원',
    '부사관',
    '가택경비원',
    '가정부',
    'a',
    'b',
    'c',
    'd',
    'e'
  ]
  return (
    <S.MainWarpper>
      <S.TextWarpper>
        <S.FirstText>지원 분야를 선택하세요</S.FirstText>
        <S.LastText>
          관심 분야 선택 시 해당 분야의 면접 문제를 보실 수 있습니다.
        </S.LastText>
      </S.TextWarpper>
      <S.FieldForm action="">
        {fieldList.map(field => {
          return(
            <FieldItem  field={field}/>
          )
        })}
      </S.FieldForm>
    </S.MainWarpper>
  );
};

export default Field;
