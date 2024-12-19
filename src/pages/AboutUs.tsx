import Animations from "../components/Animations";
import {
  AboutGrid,
  ContainerAboutUs,
  ContainerHeaderVariant,
  StyledHeaderVariant,
  StyledSpan,
} from "../components/styles/About.styled";
import { transition } from "../components/Transitions";
import { AboutUs1, AboutUs2 } from "../assets/image";

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
      <div style={{ position: "relative" }}>
        <Animations delay={0.1} />
        <img
          src={AboutUs1}
          alt="AboutUs1"
          style={{ height: "100vh", objectFit: "contain" }}
        />
      </div>
      <div style={{ position: "relative" }}>
        <Animations delay={0.2} />
        <img
          src={AboutUs2}
          alt="AboutUs2"
          style={{ height: "100vh", objectFit: "contain" }}
        />
      </div>
      <span>
        We're an independent digital-first design studio, combining branding,
        motion design & digital design to help amazing clients stand out from
        the crowd in a digital first world.
      </span>
      <div>
        <StyledSpan>Nombre</StyledSpan> 
        <StyledSpan>Funcion</StyledSpan>
      </div>
      <div>
        <StyledSpan>Nombre</StyledSpan>
        <StyledSpan>Funcion</StyledSpan>
      </div>
    </AboutGrid>
  );
};
export const AboutUsPage = transition(AboutUs);
