import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 400px;
  height: 500px;
  background-color: #ffffff;
  margin-left: 175px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginName = styled.p`
  display: lnline-block;
  font-size: 3rem;
  font-weight: bold;
  color: #646464;
  margin: 0;
  margin-bottom: 10px;
`;

export const LoginWrapper = styled.form`
  border-top: 1px solid #b3b3b3;
  width: 80%;
  height: 60%;
  margin-bottom: 40px;
`;

export const LoginLabel = styled.p`
  display: lnline-block;
  font-size: 20px;
  font-weight: bold;
  color: #646464;
  margin: 0;
  margin-bottom: 10px;
`;

export const LoginInput = styled.input`
  width: 94%;
  height: 40px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const LoginSave = styled.p`
  display: lnline-block;
  font-size: 10px;
  font-weight: bold;
  color: #646464;
  margin: 0;
  margin-bottom: 10px;
`;

export const LoginSubmit = styled.button`
  width: 100%;
  height: 45px;
  background: #333333;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
`;
