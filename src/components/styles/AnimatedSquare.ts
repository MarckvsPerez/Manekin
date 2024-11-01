import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledMotionDiv = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: #414141;
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
`;