import { transition } from "../components/Transitions";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../components/Footer";
import { events } from "../constants/Events";
import {
  ScrollContainer,
  EventItem,
  EventDetails,
  EventImage,
  DividerLine,
  FooterContainer,
  FooterText,
  Container,
  Divider,
} from "../components/styles/Events.styled";
import Animations from "../components/Animations";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const HorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    document.querySelector(".custom-cursor")?.classList.add("hover");
    setHoveredEvent(id);
  };

  const handleMouseLeave = () => {
    document.querySelector(".custom-cursor")?.classList.remove("hover");
    setHoveredEvent(null);
  };

  useEffect(() => {
    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY * 10;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", (event) =>
        handleWheel(event as unknown as React.WheelEvent<HTMLDivElement>)
      );
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", (event) =>
          handleWheel(event as unknown as React.WheelEvent<HTMLDivElement>)
        );
      }
    };
  }, []);

  return (
    <Container>
      <ScrollContainer
        ref={scrollContainerRef}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {events.map((event, index) => (
          <EventItem key={event.id}>
            <Animations delay={index * 0.1} />
            <EventDetails>
              <div style={{ position: "relative", height: "85%" }}>
                <EventImage
                  src={event.image}
                  alt="event_1"
                  onMouseEnter={() => {
                    handleMouseEnter(event.id);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                  }}
                />
                {event.id === hoveredEvent && (
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
                      url={event.video}
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
                      onMouseEnter={() => handleMouseEnter(event.id)}
                      onMouseLeave={() => handleMouseLeave()}
                    />
                  </motion.div>
                )}
              </div>
              <div>
                <h1
                  style={{
                    fontSize: "3vw",
                    fontWeight: 1000,
                    textTransform: "uppercase",
                    lineHeight: 0.8,
                    margin: 0,
                    marginTop: "3rem",
                  }}
                >
                  Evento {event.id}
                </h1>
                <p
                  style={{
                    fontSize: "1vw",
                    color: "#949494",
                    textTransform: "uppercase",
                    paddingTop: "1rem",
                    margin: 0,
                  }}
                >
                  {event.date}
                </p>
              </div>
            </EventDetails>
            <Divider>
              <DividerLine />
            </Divider>
          </EventItem>
        ))}
      </ScrollContainer>

      <FooterContainer>
        <Animations delay={0.1} />
        <FooterText>VIVE LA LOCURA</FooterText>
        <FooterText>EVENTOS (8)</FooterText>
      </FooterContainer>
    </Container>
  );
};

const EventsComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HorizontalScroll />
      <Footer />
    </>
  );
};

export const EventsPage = transition(EventsComponent);
