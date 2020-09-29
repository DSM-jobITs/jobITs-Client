import styled from "styled-components";

export const MainWarpper = styled.div`
  display: flex;
  width: 100%;
  min-height: 680px;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListWarppper = styled.div`
  width: 70%;
  min-height: 700px;
  margin-top: 10px;
`;

export const FilterText = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: #381e52;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  padding: 5px 0px;
  align-items: center;
  background: #e4c7ff;
`;

export const HeaderTitle = styled.p`
  font-weight: bold;
  margin: 350px;
  color: #28004f;
`;

export const HeaderDate = styled.p`
  font-weight: bold;
  color: #28004f;
  margin-right: 65px;
`;

export const ListInner = styled.div`
  width: 100%;
  height: 520px;
`;

export const AddButton = styled.button`
  position: relative;
  width: 150px;
  height: 45px;
  float: right;
  margin-right: 65px;
  margin-top: -10px;
  background: #e0d5e0;
  box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: none;
`;
