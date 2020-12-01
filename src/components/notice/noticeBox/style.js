import styled from "styled-components";

export const List = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #bdbdbd;
  padding: 1.8rem 1.25rem;
  @media only screen and (max-width: 1470px) {
    & {
      padding : 1.2rem 1.25rem;
    }
  }
`;

export const ListContent = styled.p`
  display: flex;
  margin: ${props => props.err ? '2rem 0 0 0' : '0'};
  align-items: center;
  color: #707070;
  justify-content : ${props => props.err ? 'center' : ''};
  &:hover {
    color : #444444;
    transition : 0.2s;
  }
  @media only screen and (max-width: 1470px) {
    & {
      font-size : 0.8rem;
    }
  }
`;

export const ListDate = styled.p`
  margin: 0;
  text-align: center;
  margin-left: 1.4rem;
  color: #707070;
  @media only screen and (max-width: 1470px) {
    & {
      font-size : 0.5rem;
    }
  }
`;

export const DeleteButton = styled.button`
  margin-left : 10rem;
  background-color : #C4A1C4;
  color : white;
  border-radius : 3px;
  font-size : 0.5rem;
  padding : 0.3rem 0.5rem;
  opacity : 0.6;

  &:hover {
    opacity : 1;
    transition : 0.3s;
  }
`;