import styled from "styled-components"

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
  justify-content:space-between;
  align-items:center;
  border-bottom: solid 2px #707070;
`

export const Title = styled.p`
  width: 300px;
  font-size:2rem;
  font-weight: bold;
  text-align:center;
`

export const Explain = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:space-around;
  width: 57%;
  height: 80px;
  margin: 20px;
  padding: 20px;
  background:#ebd6ff;
  box-shadow: 1px 3px 4px rgba(0,0,0,0.2);
`

export const P = styled.p`
  color:#929292;
  margin: 0;
`

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  width: 60%;
  height: 360px;
`

export const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  width: 99.4%;
  height: 280px;
  border: solid 1px #A9A9A9;
`

export const InputWarpper = styled.div`
  display: flex;
  justify-content:flex-start;
  align-items:center;
  width: 80%;
  height: 40px;
  margin-left:60px;
`

export const Text = styled.p`
  width:150px;
`

export const Input = styled.input`
  width: 300px;
  height: 80%;
  border: solid 1px #A9A9A9;
`

export const Submit = styled.button`
  width: 100px;
  height: 40px;
  margin-top:10px;
  border-radius:5px;
  background: #3C3C3C;
  font-weight:bold;
  color: white;
`