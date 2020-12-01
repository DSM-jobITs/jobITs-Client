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

export const ListInner = styled.div`
  width: 100%;
  height: 520px;
`;

export const NoticeWarpper = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 70px;
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
  color: #686868;
`;

export const HeaderDate = styled.p`
  font-weight: bold;
  color: #686868;
`;

export const AddButton = styled.button`
  width: ${props => props.delete ? '6.5rem' : '8.5rem'};
  height: 2.5rem;
  float: right;
  background: ${props => props.delete ? '#C4A1C4' : '#e0d5e0'};
  box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  margin-left : 1rem;
  border: none;
`;

export const PageNum = styled.div`
  display: flex;
  width: 140px;
  height:50px;
  justify-content:space-between;
  align-items:center;
`

export const Button = styled.button`
  width:50px;
  height:100%;
  background:none;
`


export const Number = styled.p`
  font-size:1rem;
  color: #000;
  margin: 0;
  margin-right: 16px;
`

export const P = styled.p`
  font-size:1rem;
  font-weight:bold;
  margin-top:7px;
`

