import styled from "styled-components";

export const MainWarpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
`;

export const Title = styled.div`
  width: 105px;
  font-weight: bold;
  font-size: 1.6rem;
  margin: auto;
  margin-left: 0;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 40px;
  background: #fafafa;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 18px;
  padding: 10px;
  background: #fafafa;
  border: none;
  border-radius: 8px;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`;

export const NoticeWarpper = styled.div`
  width: 100%;
  height: 500px;
`;

export const NoticeHeader = styled.div`
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
  color: #686868;
`;

export const HeaderDate = styled.p`
  font-weight: bold;
  color: #686868;
  margin-right: 65px;
`;
