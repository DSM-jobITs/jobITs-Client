import styled from "styled-components"

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
  margin-left:20px;
  border: none;
  border-radius:15px;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
`

export const TextArea = styled.textarea`
  width:63%;
  height: 130px;
  padding: 20px;
  margin:20px;
  font-size:1.4rem;
  resize:none;
  ::placeholder{
    font-size:1.2rem;
    color: #D1D1D1;
  }
`