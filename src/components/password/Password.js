import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
// import "babel-polyfill";
import { baseUrl } from "../../constant/index";
import { useHistory } from "react-router-dom";

const Password = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    oldPassword : '',
    newPassword : '',
    checkPassword : ''
  });

  const { oldPassword, newPassword, checkPassword } = inputs;

  const onPasswordChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

	const onPasswordReset = (e) => {
    e.preventDefault();

    const data = {
      "oldPassword" : oldPassword,
      "newPassword" : newPassword
    }

    const config = {
      headers: {
        Authorization:
          "Bearer" + localStorage.getItem("token")
      },
    };

    if(newPassword == checkPassword)
    {
      axios.put(baseUrl + "login/password", data, config)
      .then(res => {
        alert("비밀번호가 변경되었습니다.");
        history.push({
          pathname: "/",
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
    else 
    {
      alert("비밀번호를 다시 확인해주세요.");
    }
	};

	return (
		<S.Warpper>
			<S.Header>
				<S.Title>비밀번호 변경</S.Title>
			</S.Header>
			<S.Explain>
				<S.P>※ 비밀번호는 최소 자 이내여야 합니다.</S.P>
				<S.P>※ 로그인 후 새 비밀번호를 입력할 수 있습니다.</S.P>
			</S.Explain>
			<S.Form>
				<S.Div>
					<S.InputWarpper>
						<S.Text>현재 비밀번호</S.Text>
						<S.Input type="password" name="oldPassword" value={oldPassword} onChange={onPasswordChange}/>
					</S.InputWarpper>
					<S.InputWarpper>
						<S.Text>새로운 비밀번호</S.Text>
						<S.Input type="password" name="newPassword" value={newPassword} onChange={onPasswordChange}/>
					</S.InputWarpper>
					<S.InputWarpper>
						<S.Text>비밀번호 확인</S.Text>
						<S.Input type="password" name="checkPassword" value={checkPassword} onChange={onPasswordChange}/>
					</S.InputWarpper>
				</S.Div>
				<S.Submit onClick={onPasswordReset}>
					변경하기
				</S.Submit>
			</S.Form>
		</S.Warpper>
	);
};

export default Password;
