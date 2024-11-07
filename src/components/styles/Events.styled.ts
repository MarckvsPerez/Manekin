import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  margin-left: -10px;
  padding: 10px;
  scroll-behavior: smooth;
  flex: 1;
`;

export const EventItem = styled.div`
  display: flex;
`;

export const EventDetails = styled.div`
  line-height: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EventImage = styled.img`
  height: 85%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const Divider = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #414141;
`;

export const FooterContainer = styled.div`
  border-top: 1px solid #414141;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FooterText = styled.p`
  font-size: 1vw;
  color: #949494;
  text-transform: uppercase;
`;
