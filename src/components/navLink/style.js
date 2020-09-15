import styled from "styled-components";

export const NavWarp = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 55px;
  justify-content: space-around;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.75);
  background: #fff;
  align-items: center;
`;

export const Logo = styled.div`
  width: 80px;
  font-size: 1.75rem;
  font-weight: bold;
  margin-left: 100px;
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
  &:hover {
    transition: 0.1s;
    border-bottom: 7px solid #000;
  }
`;

export const Login = styled.button`
  width: 95px;
  height: 37px;
  margin-right: 100px;
  border: 4px solid black;
  outline: none;
  border-radius: 8px;
  font-weight: bold;
  background: white;
  cursor: pointer;
`;
