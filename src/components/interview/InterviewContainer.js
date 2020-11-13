import React, { useState } from 'react';
import Field from "./field/Field"
import InterviewList from "./list/InterviewList"
import Search from "./search/Search"

const InterviewContainer = () => {
  const [field,setField] = useState();
  const [keyword,setKeyword] = useState();

  const submitField = (field) => {
    setField(field)
  }

  const submitKeyword = (keyword) => {
    setKeyword(keyword)
  }
  return (
    <>
      <Field submitField={submitField}/>
      <Search submitKeyword={submitKeyword}/>
      <InterviewList field={field} keyword={keyword}/>
    </>
  );
};

export default InterviewContainer;