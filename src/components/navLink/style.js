import styled,{css} from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWarp = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 3.438rem;
  justify-content: space-between;
  box-shadow: 0px 3px 6px -1px #a1a1a1;
  background: #fff;
  align-items: center;
  z-index:1;
`;

export const Logo = styled.img`
  width: 7.5rem;
  margin-left: 6rem;
`;

export const LinkWarp = styled.div`
  display: flex;
  width: 35.25rem;
  height: 1.875rem;
  margin-left:6rem;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled(NavLink)`
  display: inline-block;
  text-align: center;
  width: 6.25rem;
  height: 1.25rem;
  padding: 0.875rem;
  list-style:none;
  font-weight: bold;
  transition: border-bottom 0.1s;
  text-decoration:none;
  cursor: pointer;
  &:hover {
    border-bottom: 7px solid #6f1ab0;
  }
`;

export const displayDiv = styled.div`
  display: flex;
  flex-wrap:nowrap;
  width: 14rem;
  margin-right: 6rem;
  visibility: ${props => props.isLogin ? "" : "hidden"}
`;

export const Button = styled.button`
  width: 6.875rem;
  height: 2.313rem;
  border: 4px solid #7b598a;
  outline: none;
  margin: 0 0.4rem;
  border-radius: 8px;
  font-weight: bold;
  background: white;
  color: #7b598a;
  cursor: pointer;
`;
