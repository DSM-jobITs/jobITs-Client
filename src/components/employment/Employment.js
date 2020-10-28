import React from 'react';
import * as S from "./style"
import EmpItem from "./EmpItem"
import {Link} from "react-router-dom"

const Employment = () => {
  return (
      <S.Warpper>
        <S.Header>
          <S.Title>취업 사전</S.Title>
          <Link to="/addEmployment">
            <S.AddQuestion>추가하기</S.AddQuestion>
          </Link>
        </S.Header>
        <EmpItem/>
      </S.Warpper>
  );
};

export default Employment;