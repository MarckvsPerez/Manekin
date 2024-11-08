import { Headline, Events, event9 } from "../assets/image";
import HeadlineVideo from "../assets/videos/Headline.mp4";
import EventsVideo from "../assets/videos/Events.mp4";
import NewEventsVideo from "../assets/videos/event_09.mp4";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

import { transition } from "../components/Transitions";
import {
  Container,
  StyledContentRight,
  EmptySpace,
  StyledHeader,
  StyledContent,
  StyledContentLeft,
  StyledContentRightContainer,
  Divider,
  StyledHeaderContainer,
} from "../components/styles/Home.styled";
import ReactPlayer from "react-player";

function Home() {
  return (
    <Container>
      <MainHeader />
      <MainContent />
      <RightContent />
    </Container>
  );
}

export const RightContent = () => {
  const refUpcoming = useRef(null);
  const refPast = useRef(null);
  const refDjs = useRef(null);
  const refMerch = useRef(null);

  const [hoveredUpcoming, setHoveredUpcoming] = useState(false);
  const [hoveredPast, setHoveredPast] = useState(false);
  const [hoveredDjs, setHoveredDjs] = useState(false);
  const [hoveredMerch, setHoveredMerch] = useState(false);

  const isInViewUpcoming = useInView(refUpcoming, { once: true });
  const isInViewPast = useInView(refPast, { once: true });
  const isInViewDjs = useInView(refDjs, { once: true });
  const isInViewMerch = useInView(refMerch, { once: true });

  const handleMouseEnter = (
    setHovered: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHovered(true);
    document.querySelector(".custom-cursor")?.classList.add("hover");
  };

  const handleMouseLeave = (
    setHovered: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHovered(false);
    document.querySelector(".custom-cursor")?.classList.remove("hover");
  };

  const animateText = (text: string, isInView: boolean) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          display: "inline-block",
          whiteSpace: "pre",
          transformOrigin: "bottom",
        }}
      >
        {char}
      </motion.span>
    ));

  return (
    <StyledContentRight>
      <EmptySpace />
      <StyledContentRightContainer>
        <div style={{ position: "relative" }}>
          <img
            src={event9}
            alt="Manikin"
            style={{
              width: "100%",
              cursor: "pointer",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            onMouseEnter={() => {
              handleMouseEnter(setHoveredUpcoming);
            }}
            onMouseLeave={() => {
              handleMouseLeave(setHoveredUpcoming);
            }}
          />
          {hoveredUpcoming && (
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                height: "60%",
                overflow: "hidden",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ReactPlayer
                url={NewEventsVideo}
                playing
                controls={false}
                width="100%"
                height="100%"
                loop={true}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1.78)",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(setHoveredUpcoming)}
                onMouseLeave={() => handleMouseLeave(setHoveredUpcoming)}
              />
            </motion.div>
          )}
        </div>

        <h3 ref={refUpcoming}>
          {animateText("PROXIMO EVENTO", isInViewUpcoming)}
        </h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />

        <div style={{ position: "relative" }}>
          <img
            src={Events}
            alt="Manikin"
            style={{ width: "100%", cursor: "pointer" }}
            onMouseEnter={() => handleMouseEnter(setHoveredPast)}
            onMouseLeave={() => handleMouseLeave(setHoveredPast)}
          />
          {hoveredPast && (
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                height: "60%",
                overflow: "hidden",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ReactPlayer
                url={EventsVideo}
                playing
                controls={false}
                width="100%"
                height="100%"
                loop={true}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1.78)",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(setHoveredPast)}
                onMouseLeave={() => handleMouseLeave(setHoveredPast)}
              />
            </motion.div>
          )}
        </div>
        <h3 ref={refPast}>{animateText("EVENTOS PASADOS", isInViewPast)}</h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />

        <div style={{ position: "relative" }}>
          <img
            src={Headline}
            alt="Manikin"
            style={{
              width: "100%",
              cursor: "pointer",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            onMouseEnter={() => {
              handleMouseEnter(setHoveredDjs);
            }}
            onMouseLeave={() => {
              handleMouseLeave(setHoveredDjs);
            }}
          />
          {hoveredDjs && (
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                height: "60%",
                overflow: "hidden",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ReactPlayer
                url={HeadlineVideo}
                playing
                controls={false}
                width="100%"
                height="100%"
                loop={true}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1.78)",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(setHoveredDjs)}
                onMouseLeave={() => handleMouseLeave(setHoveredDjs)}
              />
            </motion.div>
          )}
        </div>
        <h3 ref={refDjs}>{animateText("DJS RESIDENTES", isInViewDjs)}</h3>
        <p>21 DE DICIEMBRE DE 2024</p>
        <Divider />
      </StyledContentRightContainer>
    </StyledContentRight>
  );
};

export const MainHeader = () => {
  const text = "MANIKIN EVENTS";

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transformOrigin: "bottom",
            }}
          >
            {char}
          </motion.span>
        ))}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export const MainContent = () => {
  return (
    <StyledContent>
      <LeftContent />
    </StyledContent>
  );
};

export const LeftContent = () => {
  return (
    <StyledContentLeft>
      <div>
        <p>/ˈtechnɔːn/cul·ture</p>
        <p>VIVE LA LOCURA</p>
      </div>

      <div>
        <p>
          Una Empresa Independiente de Organización de Eventos Basada en
          Terrassa, Barcelona. Fusionamos música, tecnología y experiencias
          inmersivas para crear eventos únicos de música tecno. Especializados
          en llevar la escena tecno a otro nivel.
        </p>
      </div>
    </StyledContentLeft>
  );
};

export const HomePage = transition(Home);
