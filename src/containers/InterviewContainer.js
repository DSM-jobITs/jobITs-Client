import React,{Fragment} from 'react';
import Field from "../components/interview/field/Field"
import List from "../components/interview/list/InterviewList"
import Search from "../components/interview/search/Search"

const InterviewContainer = () => {
  return (
    <Fragment>
      <Field />
      <Search />
      <List />
    </Fragment>
  );
};

export default InterviewContainer;