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

export const ErrorMessage = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 30rem;
  height: 20rem;
  font-size:2rem;
  margin: 0 auto;
  color: #bababa;
`

export const AddButton = styled.button`
  position: relative;
  /* width: 9.375rem; */
  width: ${props => props.isAdd ? "9.375rem":"5.5rem"};
  height: 2.8125rem;
  float: right;
  margin-right: 65px;
  margin-top: -1 0px;
  background: ${props => props.isAdd ? "#e0d5e0":"#d6a7e8"};
  box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.3);
  border-radius: 0.9375rem;
  border: none;
`;

export const PageNum = styled.div`
  display: flex;
  width: 140px;
  height:50px;
  margin-top:-65px;
  justify-content:space-between;
  align-items:center;
`

export const Button = styled.button`
  width:50px;
  height:100%;
  background:none;
`

export const P = styled.p`
  font-size:1rem;
  font-weight:bold;
  margin-top:7px;
`