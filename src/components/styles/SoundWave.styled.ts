import styled from "styled-components";
import { keyframes } from "styled-components";

export const sound = keyframes`
  0% {
    opacity: 0.35;
    height: 3px;
  }
  100% {
    opacity: 1;
    height: 28px;
  }
`;

export const barColor = "#fff";

export const BarsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

interface BarProps {
  leftPosition: number;
  duration: number;
}

export const Bar = styled.div<BarProps & { isPaused: boolean }>`
  position: absolute;
  bottom: 1px;
  width: 3px;
  height: 3px;
  background: ${({ isPaused }) => (!isPaused ? "#000" : barColor)};
  animation: ${sound} ${({ duration }) => duration}ms linear infinite alternate;
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
  opacity: 0.35;
  right: ${({ leftPosition }) => leftPosition}px;
  transition: background 0.3s ease;
`;
