import styled from "styled-components"

export const TitleBox = styled.div`
  width:65%;
  height: 7rem;
  background:#ededed;
`

export const Title = styled.p`
  font-size:1.3rem;
  font-weight:bold;
  margin-left:1rem;
  color:#242424;
`

export const Date = styled.p`
  font-size:1rem;
  margin-left:1rem;
  color:#707070;
`

export const Viewer = styled.div`
  width:60%;
  min-height: 20rem;
  margin-top:1rem;
`

export const FileBox = styled.div`
  display:flex;
  align-items:center;
  width:65%; 
  height:4.2rem;
  border-top:solid 2px #707070;
  border-bottom:solid 2px #707070; 
  margin:1rem 0;
`

export const P = styled.p`
  margin-left: 2rem;
  font-weight:bold;
  ::after{
    content:" ";
    margin-left:1.4rem;
    border-right: solid 2px #787878;
  }
`

export const File = styled.p`
  margin-left:1.4rem;
  cursor: pointer;
`

export const Button = styled.button`
  width: 7.5rem;
  height: 2.5rem;
  border: none;
  border-radius:0.938rem;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
  cursor:pointer;
`