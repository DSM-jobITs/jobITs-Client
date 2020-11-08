import React from "react";
import * as S from "./style";
import * as N from "../style";
import {Link} from "react-router-dom"

const NoticeBox = ({title, createdAt, id}) => {
  return (
    <S.List>
      <Link
        style={{ textDecoration: "none", width : "70%" }}
        to={{
          pathname: `/notice/${id}`,
          state : {id}
        }}
      >
      <S.ListContent>
      {title}
      </S.ListContent>
      </Link>
      <S.ListDate>{createdAt}</S.ListDate>
      <S.DeleteButton>삭제</S.DeleteButton>
    </S.List>
  );
};

export default NoticeBox;
