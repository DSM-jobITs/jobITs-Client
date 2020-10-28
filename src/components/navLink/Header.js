import React from "react";
import * as S from "./style";
import {Route, Switch, Link} from "react-router-dom"
import MainContainer from "../../containers/MainContainer"
import Company from "../../components/company/Company"
import InterviewContainer from "../interview/InterviewContainer"
import AddInterview from "../../components/interview/addInterview/AddInterview"
import Notice from "../notice/Notice"
import AddNotice from "../notice/addNotice/AddNotice"
import Employment from "../employment/Employment"
import AddEmployment from "../employment/addEmployment/AddEmployment"
import Password from "../password/Password"

const Header = () => {

  return (
    <>
      <S.NavWarp>
        <Link to="/">
          <S.Logo src="/src/img/Logo.png" />
        </Link>
        <S.LinkWarp>
          <S.Category to="/notice">공지사항</S.Category>
          <S.Category to="/company">기업</S.Category>
          <S.Category to="/interview">면접</S.Category>
          <S.Category to="/employment">취업사전</S.Category>
        </S.LinkWarp>
        <Link to="/password">
          <S.Login>비밀번호 변경</S.Login>
        </Link>
      </S.NavWarp>
      <Switch>
        <Route path="/" exact={true} component={MainContainer} />
        <Route path="/company" component={Company} />
        <Route path="/interview" component={InterviewContainer} />
        <Route path="/notice" component={Notice} />
        <Route path="/addInterview" component={AddInterview} />
        <Route path="/addNotice" component={AddNotice} />
        <Route path="/employment" component={Employment} />
        <Route path="/addEmployment" component={AddEmployment}/>
        <Route path="/password" component={Password} />
      </Switch>
    </>
  );
};

export default Header;
