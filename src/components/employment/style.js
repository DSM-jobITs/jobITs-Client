import styled,{css} from "styled-components"

export const Warpper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.company ? '#FFFFFF' : '#F6F6F6;'};
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`

export const Header = styled.div`
  margin-top: 4.375rem;
  display: flex;
  width: 60%;
  height: 6.25rem;
  justify-content:space-between;
  align-items:center;
`

export const Title = styled.p`
  width: 18.75rem;
  font-size:2rem;
  font-weight: bold;
  text-align:center;
  margin-left:-5rem;
`

export const AddQuestion = styled.button`
  width:  7.5rem;
  height: 2.5rem;
  margin-left:-1.25rem;
  border: none;
  border-radius:0.938rem;
  background: #4B4B4B;
  color: #fff;
  font-weight:bold; 
`
export const Div = styled.div`
  display: flex;
  width: 50%;
  flex-direction:column;
  align-items:center;
  margin-bottom: 1rem;
`

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items:center;
  background: #F7DCFF;
  padding: 0 2.5rem;
  cursor: pointer;
  justify-content:space-between
`

export const Question = styled.p`
  font-size:1.1rem;
  width:100%;
  height: 1.875rem;
  margin:0;
`
export const ExtendBox = styled.div`
  display: ${props => props.isClick ? "flex" : "none"};
  width: 100%;
  height: 10rem;
  padding: 0 2.5rem;
  background: #e3c7eb;
`

export const Answer = styled.p`
  font-size:1.1rem;
  width: 100%;
  height: 88%;

`