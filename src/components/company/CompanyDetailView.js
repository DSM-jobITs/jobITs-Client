import React from "react";
import * as S from "../employment/style";
import * as C from "./style";
import CompanyPasser from "./CompanyPasser";

const CompanyDetailView = () => {
  return (
    <S.Warpper company>
      <C.DetailContainer detail>
        <C.DetailContainer detailBox>
          <C.ImgContainer detail></C.ImgContainer>
          <C.div>
            <C.CompanysTitle text>현재 총 <C.CompanyColorText>7</C.CompanyColorText>명 취업</C.CompanysTitle>
            <C.FlexContainer>
              <C.Title detail text>코드 잇 (code it)</C.Title>
              <C.CompanysTitle detail text>서울</C.CompanysTitle>
            </C.FlexContainer>
            <C.CompanysTitle>최고의 코딩교육을 제공하는 웹 사이트</C.CompanysTitle>
          </C.div>
        </C.DetailContainer>
        <C.Button>취업 현황</C.Button>
        <C.Button>채용 공고</C.Button>
        <CompanyPasser></CompanyPasser>
      </C.DetailContainer>
    </S.Warpper>
  );
};

export default CompanyDetailView;
