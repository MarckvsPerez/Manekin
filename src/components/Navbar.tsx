import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LocalTime from "./LocalTime";
import { Clock, Logo, MainNav, Nav, NavLogo } from "./styles/Navbar.styled";
import LogoPng from "../assets/Logo.png";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <AnimatePresence>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: location.pathname === "/" ? 0 : "150px" }}
          transition={{ duration: 1, ease: [1, 0.5, 0.2, 1] }}
        >
          <NavLogo>
            <Link to="/">
              <Logo src={LogoPng} alt="Manikin" />
            </Link>
          </NavLogo>
        </motion.div>
        <motion.div
          animate={{
            x: location.pathname === "/" ? "0" : "calc(50vw - 150px)",
          }}
          transition={{ duration: 1, ease: [1, 0.5, 0.2, 1] }}
        >
          <MainNav isRootPath={location.pathname === "/"}>
            <div>
              <Link to="/contact">Contacto</Link>
            </div>
            <div>
              <Link to="/about">Cartel</Link>
            </div>
            <div>
              <Link to="/about">Sobre Nosotros</Link>
            </div>
          </MainNav>
        </motion.div>
      </AnimatePresence>

      <Clock>
        <LocalTime />
      </Clock>
    </Nav>
  );
};
