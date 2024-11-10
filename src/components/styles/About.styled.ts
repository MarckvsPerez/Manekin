import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ContainerAboutUs = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
