import Animations from "../components/Animations";
import {
  ContainerAboutUs,
  ContainerHeaderVariant,
  StyledHeaderVariant,
} from "../components/styles/About.styled";
import { transition } from "../components/Transitions";

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
    </ContainerAboutUs>
  );
};

export const AboutUsPage = transition(AboutUs);
