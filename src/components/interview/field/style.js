import styled from "styled-components";

export const MainWarpper = styled.div`
  display: flex;
  width: 100%;
  height: 630px;
  background: #ebd3f5;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TextWarpper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const FirstText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4f4f4f;
  margin: 0;
`;

export const LastText = styled.p`
  font-size: 1rem;
  color: #4f4f4f;
  margin: 0;
  margin-top: 5px;
`;

export const FieldForm = styled.form`
  display: flex;
  width: 1000px;
  height: 450px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const FieldItem = styled.input`
  display: flex;
  align-items:center;
  justify-content:center;
  min-width: 200px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 25px;
  cursor: pointer;
  ::active{
    text-decoration:none;
    color: #ffffff;
  }
`;
