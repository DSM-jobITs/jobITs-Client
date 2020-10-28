import React from "react";
import * as S from "./style";

const ListBox = ({content,createdAt,id}) => {
  return (
    <S.List>
      <S.ListContent>
        {content}
      </S.ListContent>
      <S.ListDate>{createdAt}</S.ListDate>
    </S.List>
  );
};

export default ListBox;
