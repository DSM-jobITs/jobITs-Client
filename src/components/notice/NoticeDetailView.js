import React, { useState, useEffect } from 'react';
import * as S from "../employment/style"
import * as N from "./detailStyle"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';
import { baseUrl } from '../../constant';

const NoticeItem = ({location, id}) => {
  const [list, setList] = useState({});
  const [files, setFiles] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get(baseUrl + "notice/" + location.state.id)
    .then((res) => {
      console.log(res);
      setList(res.data);
      setFiles(res.data.files);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const onNoticeHistory = () => {
    history.push({
      pathname: "/notice"
  });
  }

  return (
    <S.Warpper>
      <S.Header>
        <S.Title>공지사항</S.Title>
        <N.Button onClick={onNoticeHistory}>목록으로</N.Button>
      </S.Header>
      <N.TitleBox>
        <N.Title>{list.title}</N.Title>
        <N.Date>{list.createdAt}</N.Date>
      </N.TitleBox>
      <N.Viewer>
        <p>{list.content}</p>
      </N.Viewer>
      <N.FileBox>
        <N.P>첨부파일</N.P>
      </N.FileBox>
    </S.Warpper>
  );
};

export default NoticeItem;