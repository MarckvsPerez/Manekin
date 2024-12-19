import Animations from "../components/Animations";
import {
  AboutGrid,
  ContainerAboutUs,
  ContainerHeaderVariant,
  StyledHeaderVariant,
  StyledSpan,
  StyledSubtitle,
} from "../components/styles/About.styled";
import { transition } from "../components/Transitions";
import { AboutUs1, AboutUs2, AboutUs3 } from "../assets/image";

export const AboutUs = () => {
  const primaryText = "LIVE THE";
  const secondaryText = "TECHNO";
  return (
    <ContainerAboutUs>
      <ContainerHeaderVariant
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {primaryText.split(/(?!^)/).map((char, index) => {
          if (char === " ") {
            return (
              <StyledHeaderVariant key={index}>
                <span key={index}>&nbsp;</span>
              </StyledHeaderVariant>
            );
          }
          return (
            <StyledHeaderVariant key={index}>
              <Animations delay={0.1 * index} />
              <span>{char}</span>
            </StyledHeaderVariant>
          );
        })}
      </ContainerHeaderVariant>
      <ContainerHeaderVariant
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {secondaryText.split(/(?!^)/).map((char, index) => (
          <StyledHeaderVariant key={index}>
            <Animations delay={0.1 * index} />
            <span>{char}</span>
          </StyledHeaderVariant>
        ))}
      </ContainerHeaderVariant>
      <AboutUsContent />
    </ContainerAboutUs>
  );
};

export const AboutUsContent = () => {
  return (
    <AboutGrid>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Animations delay={0.1} />
        <img
          src={AboutUs1}
          alt="AboutUs1"
          style={{
            objectFit: "contain",
            width: "100%",
            aspectRatio: "300/400",
          }}
        />
        <StyledSpan>Oriol</StyledSpan>
        <StyledSubtitle>Coordinación técnica de eventos</StyledSubtitle>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Animations delay={0.2} />
        <img
          src={AboutUs2}
          alt="AboutUs2"
          style={{
            objectFit: "contain",
            width: "100%",
            aspectRatio: "300/400",
          }}
        />
        <StyledSpan>Adrian</StyledSpan>
        <StyledSubtitle>Booking de DJs y artistas</StyledSubtitle>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Animations delay={0.2} />
        <img
          src={AboutUs3}
          alt="AboutUs3"
          style={{
            objectFit: "contain",
            width: "100%",
            aspectRatio: "300/400",
          }}
        />
        <StyledSpan>Daniel</StyledSpan>
        <StyledSubtitle>Desarrollo de la identidad visual</StyledSubtitle>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "100px",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <span style={{ color: "#888" }}>
          Somos un colectivo independiente especializado en crear experiencias
          techno únicas y memorables. Fusionamos música underground, diseño
          inmersivo y tecnología de vanguardia para transformar espacios
          ordinarios en territorios de libertad musical y expresión artística.
        </span>
      </div>
    </AboutGrid>
  );
};
export const AboutUsPage = transition(AboutUs);
