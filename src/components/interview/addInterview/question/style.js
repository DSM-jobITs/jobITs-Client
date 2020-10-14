import styled from "styled-components";

export const Textarea = styled.textarea`
  display: flex;
  width: 90%;
  height: 130px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 20px;
  resize: none;
  font-size: 1.2rem;
  ::placeholder{
    font-size:1.1rem;
  }
`

export const Input = styled.input`
  &:checked + label{
    color: #ffffff;
    background: #c259ff;
    font-weight:bold;
  }
`

export const Label = styled.label`
  display: flex;
  align-items:center;
  justify-content:center;
  min-width: 90px;
  margin-left: 400px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 25px;
  cursor: pointer;
`