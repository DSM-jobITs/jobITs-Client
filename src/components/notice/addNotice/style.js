import styled from "styled-components";

export const MainForm = styled.form`
  display: flex;
  width:100%;
  min-height: 100vh;
  background: #F6F6F6;
  flex-direction:column;
`

export const Warpper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background:#F6F6F6;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`

export const Header = styled.div`
  margin-top: 70px;
  display: flex;
  width: 60%;
  height: 100px;
  align-items:center;
`

export const Title = styled.p`
  width: 300px;
  font-size:2rem;
  font-weight: bold;
  text-align:center;
  margin-left:-80px;
`

export const SubmitBtn = styled.button`
  width:  120px;
  height: 40px;
  border: none;
  border-radius:15px;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
`

export const InputWarpper = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  width: 70%;
  min-height: 240px;
`