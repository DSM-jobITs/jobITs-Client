import styled,{css} from "styled-components"

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
`

export const Title = styled.p`
  width: 300px;
  font-size:2rem;
  font-weight: bold;
  text-align:center;
  margin-left:-80px;
`

export const AddQuestion = styled.button`
  width:  120px;
  height: 40px;
  margin-left:-20px;
  border: none;
  border-radius:15px;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
`

export const Box = styled.div`
  display: flex;
  width: 60%;
  height: 80px;
  align-items:center;
  background: #F7DCFF;
  padding: 0 40px;
  cursor: pointer;
  justify-content:space-between
`

export const Question = styled.p`
  font-size:1.1rem;
  width:80%;
  height: 30px;
  margin:0;
`
export const ExtendBox = styled.div`
  display: flex;
  width: 60%;
  height: 300px;
  padding: 0 40px;
  background: #e3c7eb;
  margin-bottom:20px;
`

export const Answer = styled.p`
  font-size:1.1rem;
  width: 100%;
  height: 88%;

`