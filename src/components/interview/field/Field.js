import React from "react";
import * as S from "./style";

const Field = () => {

  const fieldList = [
    '프론트엔드',
    '백엔드',
    '데이터베이스',
    '보안',
    '게임',
  ]
  return (
    <S.MainWarpper>
      <S.TextWarpper>
        <S.FirstText>지원 분야를 선택하세요</S.FirstText>
        <S.LastText>
          관심 분야 선택 시 해당 분야의 면접 문제를 보실 수 있습니다.
        </S.LastText>
      </S.TextWarpper>
      <S.FieldWarpper>
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
        <S.FieldItem />
      </S.FieldWarpper>
    </S.MainWarpper>
  );
};

export default Field;
