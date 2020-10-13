import React from "react";
import styled from "styled-components"

const Label = styled.label`
  display: flex;
  align-items:center;
  justify-content:center;
  min-width: 200px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 25px;
  cursor: pointer;
  :checked{
    background-color: #000000;
`

const FieldItem = ({field}) => {
  return (
    <>
      <input name="field" type="radio" id={field} hidden/>
      <Label for={field}>{field}</Label>
    </>
  );
};

export default FieldItem;