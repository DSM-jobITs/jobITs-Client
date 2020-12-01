import React from 'react';
import Field from "./field/Field"
import List from "./list/InterviewList"
import Search from "./search/Search"

const InterviewContainer = () => {
  return (
    <div>
      <Field />
      <Search />
      <List />
    </div>
  );
};

export default InterviewContainer;