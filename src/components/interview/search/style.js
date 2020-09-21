import styled from "styled-components";

export const MainWarpper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const SearchWarpper = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  height: 33%;
  justify-content: space-between;
  background: #000000;
  align-items: center;
  padding-right: 10px;
  background: #fafafa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  width: 450px;
  height: 100%;
  padding: 0 15px;
  background: #fafafa;
  border-radius: 20px;
  border: none;
  &::placeholder {
    color: #a7a6a6;
    font-weight: bold;
  }
`;

export const SearchIcon = styled.img`
  cursor: pointer;
`;
