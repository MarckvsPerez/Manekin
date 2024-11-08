import { transition } from "../components/Transitions";
import { useEffect, useRef } from "react";
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

const HorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    document.querySelector(".custom-cursor")?.classList.add("hover");
  };

  const handleMouseLeave = () => {
    document.querySelector(".custom-cursor")?.classList.remove("hover");
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
            <Animations delay={index * 0.05} />
            <EventDetails>
              <EventImage
                src={event.image}
                alt="event_1"
                onMouseEnter={() => {
                  handleMouseEnter();
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                }}
              />
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
  return (
    <>
      <HorizontalScroll />
      <Footer />
    </>
  );
};

export const EventsPage = transition(EventsComponent);
