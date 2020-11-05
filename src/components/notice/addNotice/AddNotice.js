import React,{useState, useRef} from "react";
import 'babel-polyfill';
import JoditEditor from "jodit-react";
import * as S from "./style";

const AddNotice = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    readonly: false,
    height: 500,
    allowResizeX: false,
    allowResizeY: false
  }

  const onClick = e => {
    e.preventDefault();
    console.log(document.getElementById("editor").value)
  }

  return (
    <S.MainForm action="">
      <S.Warpper>
        <S.Header>
          <S.Title>공지사항</S.Title>
        </S.Header>
        <S.InputWarpper>
        <JoditEditor
          id="editor"
          ref={editor}
          value={content}
          config={config}
          tableIndex={1}
        />
        <S.SubmitBtn onClick={onClick}>등록하기</S.SubmitBtn>
        </S.InputWarpper>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddNotice;
