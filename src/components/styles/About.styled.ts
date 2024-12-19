import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ContainerAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ContainerHeaderVariant = styled(motion.div)`
  display: flex;
  overflow: hidden;
`;

export const StyledHeaderVariant = styled.div`
  font-size: clamp(2rem, 19vw, 19vw);
  font-weight: 1000;
  line-height: 0.75;
  position: relative;
`;

export const AboutGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  overflow: hidden;
`;

export const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 1000;
  display: block;
  text-transform: uppercase;

`;

export const StyledSubtitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  display: block;
  color: #888;
  text-transform: uppercase;
`;
