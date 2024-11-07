import { motion } from "framer-motion";
import Logo from "../assets/Logo.svg";

export const transition = (OgComponent: React.ComponentType) => {
  return () => (
    <>
      <OgComponent />

      <motion.div
        className="slide-in"
        initial={{ y: "100vh" }}
        animate={{ y: "100vh" }}
        exit={{ y: "0" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-out"
        initial={{ y: "0" }}
        animate={{ y: "-100vh" }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0, delay: 0.1 }}
        className="logo-container"
      >
        <img src={Logo} height={100} alt="Logo" />
      </motion.div>
    </>
  );
};
