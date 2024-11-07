import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  list-style: none;
  margin-top: 20px;
  position: relative;
  font-size: 1.3vw;
  font-weight: 400;
  margin-left: 10px;
  margin-right: 10px;
  height: 3vw;
  overflow: hidden;
`;

export const MainNav = styled.div<{ isRootPath: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Logo = styled.img`
  position: absolute;
  left: 0;
  height: 1.5vw;
`;
export const Clock = styled.div`
  position: absolute;
  right: 0;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#b4b4b4" : "inherit")};
  text-decoration: none;
  transition: color 1s ease;
`;