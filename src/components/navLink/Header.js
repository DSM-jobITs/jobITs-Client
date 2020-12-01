import React,{ useState } from "react";
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
import CompanyDetailView from "../company/CompanyDetailView";
import NoticeDetailView from "../notice/NoticeDetailView";
import Logout from "./Logout"

const Header = () => {
  const [isLogin,setIsLogin] = useState(false);
  const activeStyle = {
    color: 'black'
  }
  {console.log(isLogin)}

  return (
    <>
      <S.NavWarp>
        <Link to="/">
          <S.Logo src="/src/img/Logo.png" />
        </Link>
        <S.LinkWarp>
          <S.Category to="/notice" activeStyle={activeStyle}>공지사항</S.Category>
          <S.Category to="/company" activeStyle={activeStyle}>기업</S.Category>
          <S.Category to="/interview" activeStyle={activeStyle}>면접</S.Category>
          <S.Category to="/employment" activeStyle={activeStyle}>취업사전</S.Category>
          <S.Category to="/recruitment" activeStyle={activeStyle}>채용정보</S.Category>
        </S.LinkWarp> 
        <S.displayDiv isLogin={isLogin}>
          <Link to="/password">
            <S.Button name="password">비밀번호 변경</S.Button>
          </Link>
          <Logout setIsLogin={setIsLogin} />
        </S.displayDiv>
      </S.NavWarp>
      <Switch>
        <Route exact path="/" render={props => (<MainContainer {...props} isLogin={isLogin} setIsLogin={setIsLogin} />)} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/company/:id" render={({ location }) => (<CompanyDetailView location={location} /> )} />
        <Route path="/interview" component={InterviewContainer} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/notice/:id" render={({location}) => (<NoticeDetailView location={location} /> )} />
        <Route path="/addInterview" component={AddInterview} />
        <Route path="/addNotice" component={AddNotice} />
        <Route path="/employment" component={Employment} />
        <Route path="/addEmployment" component={AddEmployment}/>
        <Route path="/password" component={Password} />
        <Route path="/" component={Logout} />
      </Switch>
    </>
  );
};

export default Header;
