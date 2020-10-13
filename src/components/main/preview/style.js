import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewWrapper = styled.div`
  width: 1100px;
  height: 250px;
  background: #fff;
`;

export const TopInner = styled.div`
  display: flex;
  width: 1100px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const PreviewLabel = styled.p`
  display: inline-block;
  width: 100px;
  font-weight: bold;
  font-size: 2.5rem;
  color: #494949;
`;

export const NoticeButton = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 30px;
  margin-right: 15px;
  outline: none;
  border: none;
  border-radius:50%;
  cursor: pointer;
`;

export const NoticeHeader = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-top: solid 2px #000000;
  border-bottom: solid 2px #000000;
  justify-content: space-between;
  padding: 5px 0px;
  align-items: center;
`;

export const HeaderInner = styled.p`
  font-weight: bold;
  margin: 0 85px;
`;
