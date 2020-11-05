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
  height: 6.25rem;
  align-items:center;
`

export const Title = styled.p`
  width: 18.75rem;
  font-size:2rem;
  font-weight: bold;
  text-align:center;
  margin-left:-5rem;
`

export const SubmitBtn = styled.input`
  width:  7.5rem;
  height: 2.5rem;
  margin-left:1.25rem;
  border: none;
  border-radius:0.938rem;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
  cursor:pointer;
`

export const TextArea = styled.textarea`
  width:63%;
  height: 8.125rem;
  padding: 1.25rem;
  margin:1.25rem;
  font-size:1.4rem;
  resize:none;
  ::placeholder{
    font-size:1.2rem;
    color: #D1D1D1;
  }
`