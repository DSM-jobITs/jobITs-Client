import styled from "styled-components";

export const MainWarpper = styled.form`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.div`
  display: flex;
  width: 80%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  margin: 60px auto;
  margin-bottom: 10px;
`;

export const TitleText = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const TitleSubmit = styled.button`
  width: 110px;
  height: 40px;
  background: #4b4b4b;
  color: white;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 0px 3px 6px -1px #a1a1a1;
`;

export const AddBox = styled.div`
  display: flex;
  min-width: 100%;
  height: 800px;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: auto;
`;

export const AddQuestion = styled.button`
  width: 240px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  background: #ebebeb;
  color: #b4b4b4;
  font-weight: bold;
`;
