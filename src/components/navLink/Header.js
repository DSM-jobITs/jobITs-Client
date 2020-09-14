import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.NavWarp>
        <S.Logo>jobITs</S.Logo>
        <S.LinkWarp>
          <S.NavLink>공지사항</S.NavLink>
          <S.NavLink>기업</S.NavLink>
          <S.NavLink>면접</S.NavLink>
          <S.NavLink>취업사전</S.NavLink>
        </S.LinkWarp>
        <S.Login>로그인</S.Login>
      </S.NavWarp>
    </>
  );
};

export default Header;
