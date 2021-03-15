import React, { useEffect, useState } from "react";
import * as S from "../employment/style";
import * as C from "./style";
import CompanyItem from "./CompanyItem";
import { baseUrl } from "../../constant/index";
import axios from "axios";
import { baseUrl } from "../../constant";

const Company = () => {
  const [list, setList] = useState([]);
  const config = {
    headers: {
      Authorization:
        
    },
  };

  useEffect(() => {
    axios
      .get(baseUrl + "company?page=" + 1, config)
      .then((res) => {
        console.log(res);
        setList(res.data.lists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.Warpper company>
      <h1>ㅎㅇ</h1>
      <C.Header>
        <C.Title>기업 모두 보기</C.Title>
      </C.Header>
      <C.Companys>
        {list.map((l) => (
          <CompanyItem key={l.id} id={l.id} name={l.name} introduction={l.introduction} logo={l.logo}></CompanyItem>
        ))}
      </C.Companys>
    </S.Warpper>
  );
};

export default Company;
