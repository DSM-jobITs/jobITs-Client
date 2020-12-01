import React from "react";
import * as C from "./style";
import { Link } from "react-router-dom";

const CompanyItem = ({ id }) => {
  return (
    <C.Container>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/company/${id}`,
        }}
      >
        <C.ImgContainer src=""></C.ImgContainer>
      </Link>
      <C.CompanysTitle>카카오톡</C.CompanysTitle>
    </C.Container>
  );
};

export default CompanyItem;
