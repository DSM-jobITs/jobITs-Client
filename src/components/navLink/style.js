import styled from "styled-components";

export const NavWarp = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 55px;
  justify-content: space-around;
  box-shadow: 0px 3px 6px -1px #a1a1a1;
  background: #fff;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  margin-left: 70px;
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
  font-weight: bold;
  transition: border-bottom 0.1s;
  cursor: pointer;
  &:hover {
    border-bottom: 7px solid #6f1ab0;
  }
`;

export const Login = styled.button`
  width: 95px;
  height: 37px;
  margin-right: 100px;
  border: 4px solid #7b598a;
  outline: none;
  border-radius: 8px;
  font-weight: bold;
  background: white;
  color: #7b598a;
  cursor: pointer;
`;
