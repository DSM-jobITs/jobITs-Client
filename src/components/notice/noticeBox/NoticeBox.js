import React from "react";
import * as S from "./style";
import {Link} from "react-router-dom"

const NoticeBox = () => {
  return (
    <S.List>
      {/* <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/notice/${id}`,
        }}
      >
      </Link> */}
      <S.ListContent>
      질질문질문질문질문질문질문질문질문질문질문질문질문질문질문문질질문질문질문질문질문질문문질문문질문
      </S.ListContent>
      <S.ListDate>2020-10-24</S.ListDate>
    </S.List>
  );
};

export default NoticeBox;
