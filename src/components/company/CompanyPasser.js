import React from "react";
import * as C from "./style";

const CompanyPasser = ({ year, num }) => {
  return (
    <C.DetailContainer>
      <C.PasserText first>
        {year}년 / {num}명 합격
      </C.PasserText>
    </C.DetailContainer>
  );
};

export default CompanyPasser;
