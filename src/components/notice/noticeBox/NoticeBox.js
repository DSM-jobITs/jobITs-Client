import React from "react";
import * as S from "./style";
import {Link} from "react-router-dom"

const NoticeBox = ({title, createdAt, id}) => {
  return (
    <S.List>
      <Link
        style={{ textDecoration: "none" }}
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
    </S.List>
  );
};

export default NoticeBox;
