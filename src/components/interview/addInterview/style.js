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
  width: 70%;
  height: 100px;
  align-items:center;
`

export const Title = styled.p`
  font-size:2rem;
  font-weight: bold;
`

export const SubmitBtn = styled.button`
  width:  120px;
  height: 40px;
  border: none;
  border-radius:15px;
  margin-left: 20px;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
`

export const FieldSelect = styled.div`
  display: flex;
  margin-left: 500px;
  justify-content:center;
  align-items:center;
  width: 100px;
  height: 40px;
  background: #707070;
  border-radius:10px;
  color: #fff;
  font-size:14px;
`

export const SelectDrop = styled.select`
  width: 150px;
  height: 30px;
  margin-left: 20px;
`

export const InputWarpper = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  width: 70%;
  min-height: 240px;
`

export const AddInputBtn = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  background: #EBEBEB;
`