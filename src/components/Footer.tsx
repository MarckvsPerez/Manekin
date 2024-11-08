import { motion, useInView } from "framer-motion";
import { MainFooter, StyledFooter, SubFooter } from "./styles/Footer.styled";
import { StyledHeader } from "./styles/Home.styled";
import { useRef } from "react";
export function Footer() {
  return (
    <StyledFooter>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "calc(3vw + 20px)",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            fontSize: "1.5vw",
            color: "#000",
          }}
        >
          <a href="https://www.instagram.com/manikinevents/" target="_blank">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@manikinevents" target="_blank">
            Tik Tok
          </a>
        </div>

        <div
          style={{
            display: "grid",
            paddingLeft: "10px",
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >
          <div style={{ gridColumn: "span 6", maxWidth: "100px" }}>
            <MainFooter>All Rights Reserved © 2024</MainFooter>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <SubFooter>Correo principal</SubFooter>
            <MainFooter>info@manikinevents.com</MainFooter>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <SubFooter>Información</SubFooter>
            <MainFooter>info@manikinevents.com</MainFooter>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <SubFooter>Teléfono</SubFooter>
            <MainFooter>+34 600 000 000</MainFooter>
          </div>
        </div>
      </div>
      <FooterHeader />
    </StyledFooter>
  );
}

export const FooterHeader = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const text = "MANIKIN EVENTS";
  return (
    <StyledHeader ref={ref}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{
            duration: 1,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            transformOrigin: "bottom",
            color: "#000",
          }}
        >
          {char}
        </motion.span>
      ))}
    </StyledHeader>
  );
};
