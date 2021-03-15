import styled from "styled-components";

export const List = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #bdbdbd;
  padding: 10px 20px;
`;

export const ListContent = styled.p`
  display: flex;
  width: 80%;
  height: 60px;
  margin: 0;
  align-items: center;
  color: #707070;
`;

export const ListDate = styled.p`
  width: 10%;
  height: 20px;
  margin: 0;
  text-align: center;
  margin-left: 30px;
  color: #707070;
`;

export const Label = styled.button`
  display: ${prop => prop.isDel ? "flex":"none"};
  align-items:center;
  justify-content:center;
  min-width: 3rem;
  height: 2rem;
  border: none;
  background: #ffffff;
  border-radius:0.43rem;
  margin-right: -1rem;
  margin-left: 1rem; 
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`
