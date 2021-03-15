import styled from "styled-components"

export const Label = styled.label`
  display: flex;
  align-items:center;
  justify-content:center;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 25px;
  cursor: pointer;
`
export const Input = styled.input`
  &:checked + label{
    color: #ffffff;
    background: #c259ff;
    font-weight:bold;
  }
`