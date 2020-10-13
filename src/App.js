import React,{useState} from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/navLink/Header"
import axios from "axios"

const App = () => {
  const [contents,setContents] = useState(null);

  const onClick = async () => {
    try{
      const response = await axios.get(
        'http://10.156.146.139:3000/interview',
      );
      setContents(response.data);
    } catch(e){
      console.log(e);
    }
  };
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Header /> */}
      <div>
      <div>
        <button onClick={onClick}>헤헤 된다</button>
      </div>
      {contents/* {contents && <textarea rows={7} value={JSON.stringify(contents,null,2)} readOnly={true}  />} */}
    </div>
    </BrowserRouter>
  );
};

export default hot(module)(App);
