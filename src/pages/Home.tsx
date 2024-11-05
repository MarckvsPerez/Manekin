import { djs, merch, pastEvents, upcomingEvents } from "../assets/image";

import { transition } from "../components/Transitions";
import {
  Container,
  StyledContentRight,
  EmptySpace,
  StyledHeader,
  StyledContent,
  StyledContentLeft,
  StyledContentRightContainer,
  Divider,
} from "../components/styles/Home.styled";

function Home() {
  return (
    <Container>
      <MainHeader />
      <MainContent />
      <RightContent />
    </Container>
  );
}

export const RightContent = () => {
  return (
    <StyledContentRight>
      <EmptySpace />
      <StyledContentRightContainer>
        <img src={upcomingEvents} alt="Manikin" style={{ width: "100%" }} />
        <h3>PROXIMO EVENTO</h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />

        <img src={pastEvents} alt="Manikin" style={{ width: "100%" }} />
        <h3>EVENTOS PASADOS</h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />

        <img src={djs} alt="Manikin" style={{ width: "100%" }} />
        <h3>DJS RESIDENTES</h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />

        <img src={merch} alt="Manikin" style={{ width: "100%" }} />
        <h3>MERCHANDISING</h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />
      </StyledContentRightContainer>
    </StyledContentRight>
  );
};

export const MainHeader = () => {
  return <StyledHeader>MANIKIN EVENTS</StyledHeader>;
};

export const MainContent = () => {
  return (
    <StyledContent>
      <LeftContent />
    </StyledContent>
  );
};

export const LeftContent = () => {
  return (
    <StyledContentLeft>
      <div>
        <p>/ˈtechnɔːn/cul·ture</p>
        <p>VIVE LA LOCURA</p>
      </div>

      <div>
        <p>
          Una Empresa Independiente de Organización de Eventos Basada en
          Terrassa, Barcelona. Fusionamos música, tecnología y experiencias
          inmersivas para crear eventos únicos de música tecno. Especializados
          en llevar la escena tecno a otro nivel.
        </p>
      </div>
    </StyledContentLeft>
  );
};

export const HomePage = transition(Home);
