import styled from "styled-components";

export const MainWarpper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: #eeeeee;
  justify-content: space-around;
  align-items: center;
`;

export const MainText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #5e5e5e;
  margin-left: 100px;
`;

export const TeamWarpper = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  margin-right: 100px;
  flex-direction: column;
`;

export const TeamName = styled.p`
  font-weight: bold;
  margin-top: -20px;
  margin-bottom: -5px;
`;

export const PartWarpper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20px;
  margin: 10px 0;
  align-items: center;
`;

export const Part = styled.p`
  width: 100px;
  height: 20px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #737373;
`;

export const Member = styled.p`
  width: 100px;
  color: #737373;
  padding-top: 10px;
  text-align: center;
`;
