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
  grid-template-columns: repeat(2, 1fr);
`;  

export const StyledContentLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
& div:first-child {
  color:#949494;
}

& div:last-child {
  color:#fff;
  width:70%;
  text-align:justify;
}

  & p {
     margin:0;
  }
`;

export const StyledContentRight = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  left: 50vw;
  margin-right:10px;
  height: 100vh;
  color:#949494;
  & h3 {
    font-size:2rem;
    font-weight:1000;
    margin:0;
    margin-top:1rem;
    color:#fff;
  }
    & p {
      margin:0;
      font-size:0.8rem;
    }
`;

export const EmptySpace = styled.div`
  height: calc(13vw + 55px);
`;

export const RightContent = () => {
  return (
    <StyledContentRight>
      <EmptySpace />
      <img src={Image_1} alt="Manikin" style={{ width: '100%' }} />
      <h3>PROXIMO EVENTO</h3>
      <p>21 DE DICIEMBRE DE 2024</p>
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
      <div>

      <p>
     /ˈtechnɔːn/cul·ture
      </p>
      <p>
        VIVE LA LOCURA
      </p>
      </div>

      <div>
        <p>Una Empresa Independiente de Organización de Eventos
        Basada en Terrassa, Barcelona. Fusionamos música, tecnología y experiencias inmersivas para crear eventos únicos de música tecno. Especializados en llevar la escena tecno a otro nivel.</p>
      </div>
    </StyledContentLeft>
  )
} 

