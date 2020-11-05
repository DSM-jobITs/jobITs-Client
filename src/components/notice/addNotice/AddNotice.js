import React,{useState, useRef} from "react";
import 'babel-polyfill';
import { Editor } from "@tinymce/tinymce-react"
import * as S from "./style";

const AddNotice = () => {
  const [content, setContent] = useState('')

  const onClick = e => {
    e.preventDefault();
    console.log(document.getElementById("editor").value)
  }

  const handleEditorChange = (e) => {
    console.log('Content was updated:',e.target.getContent());
  }

  return (
    <S.MainForm action="">
      <S.Warpper>
        <S.Header>
          <S.Title>공지사항</S.Title>
        </S.Header>
        <S.InputWarpper>
          <Editor
            apiKey="3027u08u86ypbzgvk45o7bwflngtjk7og03hqop8so7df1ck"
            init={{
              height: 500,
              width: 1072,
              resize:false,
              menubar:false,
              placeholder: "공지사항을 입력하세요",
              plugins: [
                'advlist autolink lists link image', 
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }}
            onChange={handleEditorChange}
          />
          <input type="file"></input>
        <S.SubmitBtn onClick={onClick}>등록하기</S.SubmitBtn>
        </S.InputWarpper>
      </S.Warpper>
    </S.MainForm>
  );
};

export default AddNotice;
