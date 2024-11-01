import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  list-style:none;
  justify-content: space-between;
  margin-top:1.25vw;
  
`;

export const MainNav = styled.div`
  display: flex;
  gap: 20px;
  > * {
    min-width: 75px;
  }
`;

export const Logo = styled.img`
height:20px;
transition: transform 0.3s ease;
width:100px;
`