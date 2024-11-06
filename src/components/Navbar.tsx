import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LocalTime from "./LocalTime";
import { Clock, Logo, MainNav, Nav, NavLink } from "./styles/Navbar.styled";
import LogoPng from "../assets/Logo.png";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <AnimatePresence>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: location.pathname === "/" ? "-250px" : 0 }}
          transition={{ duration: 1, ease: [1, 0.5, 0.2, 1] }}
        >
          <div>
            <NavLink to="/" isActive={location.pathname === "/"}>
              <Logo src={LogoPng} alt="Manikin" />
            </NavLink>
          </div>
        </motion.div>
        <MainNav isRootPath={location.pathname === "/"}>
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x:
                location.pathname === "/"
                  ? "calc(-50vw + calc(50% + 10px))"
                  : 0,
            }}
            transition={{ duration: 1, ease: [1, 0.5, 0.2, 1] }}
            style={{ display: "flex", gap: "2vw", textWrap: "nowrap" }}
          >
            <div>
              <NavLink
                to="/contact"
                isActive={location.pathname === "/contact"}
              >
                Contacto
              </NavLink>
            </div>
            <div>
              <NavLink to="/about" isActive={location.pathname === "/about"}>
                Cartel
              </NavLink>
            </div>
            <div>
              <NavLink to="/about" isActive={location.pathname === "/about"}>
                Sobre Nosotros
              </NavLink>
            </div>
          </motion.div>
        </MainNav>
      </AnimatePresence>

      <Clock>
        <LocalTime />
      </Clock>
    </Nav>
  );
};
