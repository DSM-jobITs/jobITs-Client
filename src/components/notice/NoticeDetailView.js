import React, { useState, useEffect, useRef } from 'react';
import * as S from "./addNotice/style";
import * as N from "./detailStyle";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from '../../constant';

const NoticeItem = ({location, id}) => {
  const [list, setList] = useState({});
  const [files, setFiles] = useState([]);
  let history = useHistory();

  const onContent = (data) => {
    document.getElementById("contentBox").innerHTML = data;
  }

  useEffect(() => {
    axios.get(baseUrl + "notice/" + location.state.id)
    .then((res) => {
      console.log(res);
      setList(res.data);
      setFiles(res.data.files);
      onContent(res.data.content);
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
      <S.Header detail>
        <S.Title>공지사항</S.Title>
        <N.Button onClick={onNoticeHistory}>목록으로</N.Button>
      </S.Header>
      <N.TitleBox>
        <N.Title>{list.title}</N.Title>
        <N.Date>{list.createdAt}</N.Date>
      </N.TitleBox>
      <N.Viewer>
        <div id="contentBox"></div>
      </N.Viewer>
      <N.FileBox>
        <N.P>첨부파일</N.P>
        <div>{files.map((f) => (<div style={{marginLeft : "1.5rem"}}><a style={{textDecoration : "none"}} href={f.url} key={f.id} download={f.filename}>{f.filename}</a></div>))}</div>
      </N.FileBox>
    </S.Warpper>
  );
};

export default NoticeItem;