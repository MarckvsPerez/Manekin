import { motion } from "framer-motion";

export default function Animations({ delay }: { delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#101010",
        zIndex: 1,
      }}
      initial={{ y: 0 }}
      animate={{ y: "-110%" }}
      transition={{ duration: 1, ease: "circOut", delay: delay }}
    />
  );
}
