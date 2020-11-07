import React, { useState } from 'react';
import Field from "./field/Field"
import InterviewList from "./list/InterviewList"
import Search from "./search/Search"

const InterviewContainer = () => {
  const [field,setField] = useState();
  const submitField = (field) => {
    setField(field)
  }
  return (
    <>
      <Field submitField={submitField}/>
      <Search />
      <InterviewList field={field} />
    </>
  );
};

export default InterviewContainer;