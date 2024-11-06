import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.h1`
  width: 100vw;
  font-weight: 1000;
  text-align: center;
  font-size: clamp(2rem, 12vw, 13vw);
  margin: 0;
  white-space: nowrap;
  display: flex;
  overflow: hidden;
  line-height: .8;
  padding-bottom: 50px;
`;

export const StyledHeaderContainer = styled.div`
  width: 50%;
`;

export const StyledContent = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & div:first-child {
    color: #949494;
  }

  & div:last-child {
    color: #fff;
    width: 70%;
    text-align: justify;
  }

  & p {
    margin: 0;
  }
`;

export const StyledContentRight = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  margin-right: 10px;
  height: 100vh;
  color: #949494;
  & h3 {
    font-size: 3vw;
    font-weight: 1000;
    margin: 0;
    margin-top: 1rem;
    color: #fff;
  }
  & p {
    margin: 0;
    font-size: 0.875vw;
  }
`;

export const StyledContentRightContainer = styled.div`
  background-color: #101010;
  width: 50%;
  margin-left: 50%;
`;

export const EmptySpace = styled.div`
  height: calc(12vw + 55px);
  `;

export const Divider = styled.div`
  border-bottom: 1px solid #949494;
  margin-top: 1rem;
  margin-bottom: 1rem;
  opacity: 0.2;
`;

