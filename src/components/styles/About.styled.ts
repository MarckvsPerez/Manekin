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
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  gap: 20px;
`;

export const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 1000;
  display: block;
`;

