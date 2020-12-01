import React from "react";
import * as C from "./style";

const CompanyPasser = () => {
  return <C.DetailContainer passer>
      <C.Passer>연도 별 합격자 수</C.Passer>
      <C.PasserText first>2020년 / 2명 합격</C.PasserText>
      <C.PasserText>2020년 / 2명 합격</C.PasserText>
      <C.PasserText>2020년 / 2명 합격</C.PasserText>
  </C.DetailContainer>;
};

export default CompanyPasser;
