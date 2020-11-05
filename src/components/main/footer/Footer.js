import React from "react";
import * as S from "./style";

const Footer = () => {
  return (
    <S.MainWarpper>
      <S.MainText>
        취업처를 알아보고 싶을 땐<br /> 여기 JobITs로!
      </S.MainText>
      <S.TeamWarpper>
        <S.TeamName>Team_Mimanjob</S.TeamName>
        <S.PartWarpper>
          <S.Part>Server</S.Part>
          <S.Member>김세준</S.Member>
          <S.Member>서민준</S.Member>
          <S.Member>신두평</S.Member>
        </S.PartWarpper>
        <S.PartWarpper>
          <S.Part>Frontend</S.Part>
          <S.Member>배길준</S.Member>
          <S.Member>신서림</S.Member>
        </S.PartWarpper>
        <S.PartWarpper>
          <S.Part>Design</S.Part>
          <S.Member>김도희</S.Member>
        </S.PartWarpper>
      </S.TeamWarpper>
    </S.MainWarpper>
  );
};

export default Footer;
