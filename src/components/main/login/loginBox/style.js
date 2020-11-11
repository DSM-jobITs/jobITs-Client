import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 600px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 40rem;
  margin-right: 6rem;
`

export const WelcomeWarpper = styled.div`
  width: 30rem;
  display: flex;
`

export const LoginName = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  text-align:center;
  text-shadow: 1px 3px 2px #ac48ff;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 400px;
  height: 60%;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 94%;
  height: 60px;
  border: 1px solid #ac48ff;
  background: #ac48ff;
  border-radius: 10px;
  margin-top: 40px;
  padding: 0 20px;
  font-size: 12pt;
  color: #ffffff;
  box-shadow: 1px 2px 3px -2px rgba(0, 0, 0, 0.6);
  ::placeholder {
    color: #e3c4ff;
    font-weight: bold;
  }
`;

export const SaveWarpper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px;
`;

export const LoginSave = styled.input`
  display: inline-box;
  width: 15px;
  height: 15px;
  margin: 0 10px;
`;

export const LoginSaveLabel = styled.p`
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 3px 2px #ac48ff;
`;

export const LoginSubmit = styled.button`
  width: 250px;
  height: 60px;
  background: #951ef8;
  border: none;
  outline: none;
  border-radius: 15px;
  box-shadow: 1px 2px 5px #ac48ff;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
`;
