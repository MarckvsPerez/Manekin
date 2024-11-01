import styled from 'styled-components';
import Image_1 from "../assets/image/Image_1.jpeg"

export function Home() {
  return (
    <Container>
      <MainHeader />
      <MainContent />
      <RightContent />
    </Container>
  )
}

const Container = styled.div`
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h1`
  width: 100%;
  font-weight: 1000;
  text-align: center;
  font-size: 12vw;
  height: 13vw;
  margin: 0;
  white-space: nowrap;
`;
export const StyledContent = styled.div`
  display: grid;
  flex:1;
  border: 1px solid green;
  grid-template-columns: repeat(2, 1fr);
`;  

export const StyledContentLeft = styled.div`
  background-color: orange;
`;

export const StyledContentRight = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  left: 50vw;
  margin-right:10px;
  height: 100vh;
`;

export const CustomSide = styled.div`
  background-color: blue;
`;

export const EmptySpace = styled.div`
  height: calc(13vw + 55px);
`;

export const RightContent = () => {
  return (
    <StyledContentRight>
      <EmptySpace />
      <CustomSide>
        <img src={Image_1} alt="Manikin" style={{ width: '100%' }} />
      </CustomSide>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </StyledContentRight>
  )
}


export const MainHeader = () => {
  return (
    <StyledHeader>MANIKIN EVENTS</StyledHeader>
  )
}

export const MainContent = () => {
  return (
    <StyledContent>
      <LeftContent />
    </StyledContent>
  )
}

export const LeftContent = () => {
  return (
    <StyledContentLeft>
      Left
    </StyledContentLeft>
  )
} 

