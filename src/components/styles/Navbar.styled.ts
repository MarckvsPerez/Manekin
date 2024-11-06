import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  list-style:none;
  margin-top:20px;
  position:relative;
  font-size:20px;
  font-weight:400;
  height: 30px;
  margin-left:10px;
  margin-right:10px;
`;

export const NavLogo = styled.div`
  width: 100px;
  margin-left:-150px;
  `

  export const MainNav = styled.div<{ isRootPath: boolean }>`
  position:absolute;
  left:0;
  display: flex;
  width: 300px;
  > * {
    min-width:100px;
  }
  text-wrap: nowrap;
`;

export const Logo = styled.img`
height:24px;
transition: transform 0.3s ease;
width:100px;
`
export const Clock = styled.div`
  position:absolute;
  right:0;
`
