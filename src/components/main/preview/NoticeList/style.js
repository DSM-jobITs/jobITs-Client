import styled from "styled-components";

export const NoticeInner = styled.div`
  display: flex;
  margin: 10px 0px;
  padding: 5px 10px;
  border-bottom: solid 1px #878787;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const NoticeList = styled.li`
  display: inline-block;
  list-style: none;
  width: 70%;
  font-size: 1.2rem;
  margin: 0 15px;
  color: #878787;
`;

export const NoticeDate = styled.p`
  display: inline-block;
  width: 20%;
  font-size: 1.2rem;
  margin: 0 40px;
  text-align: right;
  color: #878787;
`;
