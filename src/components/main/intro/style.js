import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 480px;
  justify-content: space-around;
  align-items: center;
  margin-top : 3rem;
`;

export const IntroImg = styled.img`
  width: 400px;
  margin-left: 150px;
`;

export const TextWarpper = styled.div`
  display: flex;
  height: 200px;
  margin-right: 150px;
  flex-direction: column;
`;

export const FirstText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MiddleText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`;

export const LastText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #a1a1a1;
  margin: 0;
  margin-bottom: 10px;
`;
