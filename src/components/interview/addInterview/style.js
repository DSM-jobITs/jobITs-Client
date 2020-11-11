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
  margin-left:-20px;
  border: none;
  border-radius:15px;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
`

export const FieldSelect = styled.div`
  display: flex;
  margin-left: 25rem;
  justify-content:center;
  align-items:center;
  width: 6rem;
  height: 2rem;
  background: #949494;
  color: #fff;
  font-size:14px;
  font-weight:bold;
  border-top-left-radius:0.44rem;
  border-bottom-left-radius:0.44rem;
`

export const SelectDrop = styled.select`
  width: 150px;
  height: 30px;
  border-top-right-radius:0.44rem;
  border-bottom-right-radius:0.44rem;
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

export const Textarea = styled.textarea`
  display: flex;
  width: 85%;
  height: 130px;
  margin-left: 60px;
  margin-top: 20px;
  padding: 20px;
  resize: none;
  font-size: 1.2rem;
  ::placeholder{
    font-size:1.1rem;
  }
`
export const Close = styled.button`
  width: 30px;
  height: 30px;
  background: none;
`

export const Input = styled.input`
  /* &:checked + label{
    color: #ffffff;
    background: #c259ff;
    font-weight:bold;
  } */
`

export const Label = styled.label`
  display: flex;
  align-items:center;
  justify-content:center;
  min-width: 90px;
  height: 40px;
  border: none;
  border-radius: 10px;
  /* background: #ffffff; */
  background: ${prop => prop.tech ? "#c259ff":"#ffffff"};
  color: ${prop => prop.tech ? "#ffffff":"#000000"};
  font-weight: ${prop => prop.tech ? "bold":""};
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 25px;
  margin-right: 0px;
  margin-left: 920px;
  margin-top:10px;
  cursor: pointer;
`