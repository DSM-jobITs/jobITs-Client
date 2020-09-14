import styled from "styled-components";

export const LoginWarp = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
`;

export const LoginName = styled.div`
  width: 100%;
  height: 60px;
  margin: 10px;
  text-align: center;
  font-size: 2.7rem;
  &::after {
    content: "  LOGIN  ";
    border-bottom: 2px solid #000;
  }
`;

export const ID = styled.input`
  width: 300px;
  height: 40px;
  border: solid 1px #b5b5b5;
  border-radius: 5px;
  margin: 20px;
`;

export const Password = styled.input`
  width: 300px;
  height: 40px;
  border: solid 1px #b5b5b5;
  border-radius: 5px;
  margin: 20px;
`;

export const Submit = styled.button`
  width: 300px;
  height: 50px;
  background: #1a1a1a;
  border: none;
  border-radius: 5px;
  margin: 20px;
`;
