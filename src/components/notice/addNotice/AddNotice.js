import React,{useState, useRef} from "react";
import 'babel-polyfill';
import JoditEditor from "jodit-react";
import * as S from "./style";


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


  const config = {
    readonly: false,
    height: 500,
    allowResizeX: false,
    allowResizeY: false
  }

  const onClick = e => {
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
