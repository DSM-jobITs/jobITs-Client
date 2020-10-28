import React from "react";
import * as S from "../employment/style";
import * as C from "./style";
import CompanyItem from "./CompanyItem";

const Company = () => {
  return (
    <S.Warpper>
      <h1>ㅎㅇ</h1>
      <C.Header>
        <C.Title>기업 모두 보기</C.Title>
      </C.Header>
      <C.CompanysWarpper>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
      </C.CompanysWarpper>
    </S.Warpper>
  );
};

export default Company;
