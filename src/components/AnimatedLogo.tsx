import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.5 + i * 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const AnimatedLogo = ({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="345"
      height="285"
      viewBox="0 0 345 285"
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => {
        setLoading(true);
      }}
    >
      <motion.g
        transform="translate(0.000000,285.000000) scale(0.100000,-0.100000)"
        fill="none"
        stroke="#fff"
        strokeWidth="20"
      >
        <motion.path
          d="M260 2295 c-29 -35 -25 -40 481 -525 26 -25 91 -88 145 -140 55 -53 205 -196 334 -320 337 -322 431 -413 449 -432 10 -12 30 -18 61 -18 52 0 24 -24 380 324 445 434 533 517 546 512 12 -5 14 -122 14 -715 l0 -711 23 -5 c12 -3 103 -4 202 -3 l180 3 0 1020 0 1020 -211 0 -212 0 -92 -90 c-51 -49 -111 -108 -134 -130 -23 -22 -102 -99 -176 -170 -300 -290 -503 -480 -513 -483 -13 -2 -45 26 -373 343 -479 461 -540 518 -562 527 -9 4 -132 7 -273 7 -215 1 -259 -1 -269 -14z"
          stroke="#fff"
          variants={draw}
          custom={1}
        />
      </motion.g>
    </motion.svg>
  );
};

export default AnimatedLogo;
