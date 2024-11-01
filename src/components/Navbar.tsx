import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import LocalTime from './LocalTime';
import { Logo, MainNav, Nav } from './styles/Navbar.styled';
import LogoPng from "../assets/Logo.png"

export const Navbar = () => {
    const location = useLocation();

    return (
        <div>
            <Nav>
                <AnimatePresence>
                    <div>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: location.pathname === "/" ? "-110%" : 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut", }}
                        >
                            <Link to="/">
                                <Logo src={LogoPng} alt="Manikin" />
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        animate={{ x: location.pathname === "/" ? 'calc(-50vw + 65px)' : '0' }}
                        transition={{ duration: 1.5, ease: "easeInOut", }}
                    >
                        <MainNav>
                            <div><Link to="/contact">Contact</Link></div>
                            <div><Link to="/about">About Us</Link></div>
                        </MainNav>
                    </motion.div>
                </AnimatePresence>
                <LocalTime />
            </Nav>
        </div>
    )
}
