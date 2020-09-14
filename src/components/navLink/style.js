import styled from "styled-components";

export const NavWarp = styled.div`
  display: flex;
  width: 100vw;
  height: 55px;
  justify-content: space-around;
  box-shadow: 0px 6px 5px -7px black;
  align-items: center;
`;

export const Logo = styled.div`
  width: 80px;
  font-size: 1.75rem;
  font-weight: bold;
`;

export const LinkWarp = styled.div`
  display: flex;
  width: 500px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled.li`
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 20px;
  padding: 14px;
  list-style: none;
  &:hover {
    font-weight: bold;
    transition: 0.1s;
    border-bottom: 7px solid #000;
  }
`;

export const Login = styled.button`
  width: 90px;
  height: 37px;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  background: #000;
  color: white;
`;
