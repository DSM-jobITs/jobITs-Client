import React, { useState } from "react";
import "babel-polyfill";
import { Editor } from "@tinymce/tinymce-react";
import * as S from "./style";
import axios from "axios";
import { baseUrl } from "../../../constant";
import { useHistory } from "react-router-dom";


const AddNotice = () => {


const AddNotice = ({list}) => {
  console.log(list)

	const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [onCheck, setOnCheck] = useState(false);
  let history = useHistory();
	const config = {
		headers: {
			Authorization:

				"Bearer " + localStorage.getItem("token"),
		},
	};


	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleEditorChange = (e) => {
		setContent(e.target.getContent());
  };
  
  const handleFixedCheck = () => {
    setOnCheck(!onCheck);
  }

	const onSubmitNotice = (e) => {
    e.preventDefault();
		let file = document.getElementById("file").files;
		let form = new FormData();
    form.append("title", title);
    for(let i = 0; i < 10; i++) 
    {
      let uploadFile = file[i];
      form.append('files', uploadFile);
    }
		form.append("content", content);
    form.append('fixed', onCheck);
    
    axios.post(baseUrl + "notice", form, config)
    .then(() => {

      setTimeout(() => {
        history.push({
          pathname: "/notice",
        });
      }, 400);
      

      alert("공지 작성이 완료되었습니다.");
        history.push({
          pathname: "/notice",
        });

    })
    .catch(err => {
      console.log(err);
    })
	};


    console.log(document.getElementById("editor").value)
  }


	return (
		<S.MainForm action="">
			<S.Warpper>
				<S.Header>
					<S.Title>공지사항</S.Title>
				</S.Header>
				<S.InputWarpper>
					<S.TitleInput placeholder="제목을 입력하세요" onChange={handleTitleChange}></S.TitleInput>
					<Editor
						apiKey="3027u08u86ypbzgvk45o7bwflngtjk7og03hqop8so7df1ck"
						init={{
							height: 500,
							width: 1080,
							resize: false,
							menubar: false,
							placeholder: "공지사항을 입력하세요",
							plugins: [
								"advlist autolink lists link image",
								"charmap print preview anchor help",
								"searchreplace visualblocks code",
								"insertdatetime media table paste wordcount",
							],
							toolbar:
								"undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
						}}
						onChange={handleEditorChange}
					/>
					
          <S.CheckContainer>
            <input type="file" id="file"></input>
            <p>상단 고정 여부</p>
            <input type="checkbox" onChange={handleFixedCheck}></input>
          </S.CheckContainer>
          
					<S.buttonContainer>
						<S.SubmitBtn onClick={onSubmitNotice}>등록하기</S.SubmitBtn>
					</S.buttonContainer>
				</S.InputWarpper>
			</S.Warpper>
		</S.MainForm>
	);
};

export default AddNotice;
