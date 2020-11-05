import React from "react";
import * as C from "./style";
import { Link } from "react-router-dom";

const CompanyItem = ({ id, name, logo, count }) => {
  console.log(id);
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/company/${id}`,
          state: {
            id,
          },
        }}
      >
        <C.ImgContainer src={logo}></C.ImgContainer>
      </Link>
      <C.CompanysTitle>{name}</C.CompanysTitle>
    </div>
  );
};

export default CompanyItem;
