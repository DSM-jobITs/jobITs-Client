import React from "react";
import * as S from "./style";
import * as N from "../style";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../constant";

const NoticeBox = ({title, createdAt, id, isAdmin}) => {

  const config = {
		headers: {
			Authorization:
				"Bearer " + localStorage.getItem("token"),
		},
	};

  const onDeleteNotice = () => {
    axios.delete(baseUrl + "notice/" + id, config)
    .then(() => {
      alert("해당 공지가 삭제되었습니다.");
      setTimeout(() => {
        window.location.reload();
      }, 300);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <S.List>
      <Link
        style={{ textDecoration: "none", width : "70%" }}
        to={{
          pathname: `/notice/${id}`,
          state : {id}
        }}
      >
      <S.ListContent>
        <N.Number>No.{id}</N.Number>{title}
      </S.ListContent>
      </Link>
      <S.ListDate>{createdAt}</S.ListDate>
      <S.DeleteButton onClick={onDeleteNotice} style={{display : isAdmin? "" : "none"}}>삭제</S.DeleteButton>
    </S.List>
  );
};

export default NoticeBox;
