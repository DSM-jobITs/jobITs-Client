import React, { useState, useEffect } from "react";
import * as S from "../employment/style";
import * as C from "./style";
import CompanyPasser from "./CompanyPasser";
import axios from "axios";
import { baseUrl } from "../../constant";

const CompanyDetailView = ({ id, location }) => {
  const [company, setCompany] = useState({});
  const [passer, setPasser] = useState([]);
  const [clickButton, setClickButton] = useState(true);
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluIiwiaWF0IjoxNjA0NDgzMTYwLCJleHAiOjE2MTMxMjMxNjB9.DESIU01OzkbR5jxt7yOiavfNQ_6O-8x9da8PweStCSk",
    },
  };

  useEffect(() => {
    axios
      .get(baseUrl + "company/" + location.state.id, config)
      .then((res) => {
        console.log(res);
        console.log("hi");
        setCompany(res.data);
        setPasser(res.data.employedPeople);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickButton = () => {
    setClickButton(false);
  };

  return (
    <S.Warpper company>
      <C.DetailContainer detail>
        <C.DetailContainer detailBox>
          <C.ImgContainer detail src={company.logo}></C.ImgContainer>
          <C.div>
            <C.CompanysTitle text>
              현재 총 <C.CompanyColorText>{company.totalEmployed}</C.CompanyColorText>명 취업
            </C.CompanysTitle>
            <C.FlexContainer>
              <C.Title detail text>
                {company.name}
              </C.Title>
              <C.CompanysTitle detail text>
                {company.region}
              </C.CompanysTitle>
            </C.FlexContainer>
            <C.CompanysTitle>{company.introduction}</C.CompanysTitle>
          </C.div>
        </C.DetailContainer>
        <C.AddText>{clickButton ? "" : "추후 추가 예정입니다."}</C.AddText>
        <C.Button onClick={onClickButton}>취업 현황</C.Button>
        <C.Button onClick={onClickButton}>채용 공고</C.Button>
        <C.Container passer>
          <C.Passer>연도 별 합격자 수</C.Passer>
          {passer.map((pass) => (
            <CompanyPasser year={pass.year} num={pass.numOfEmployed}></CompanyPasser>
          ))}
        </C.Container>
      </C.DetailContainer>
    </S.Warpper>
  );
};

export default CompanyDetailView;
