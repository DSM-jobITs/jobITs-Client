import styled from "styled-components";

export const List = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #bdbdbd;
  padding: 1.8rem 1.25rem;
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
`;

export const ListDate = styled.p`
  margin: 0;
  text-align: center;
  margin-left: 1.4rem;
  color: #707070;
`;
