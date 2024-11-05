import { styled } from "styled-components";
import { transition } from "../components/Transitions";

const Contact = () => {
  return <Posiotion>Contact</Posiotion>;
};

const Posiotion = styled.div`
  width: 50%;
  border: 1px solid white;
`;

export const ContactPage = transition(Contact);
