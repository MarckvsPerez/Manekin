import { BarsContainer, Bar } from "./styles/SoundWave.styled";

interface SoundWaveProps {
  isPaused: boolean;
}

export const SoundWave: React.FC<SoundWaveProps> = ({ isPaused }) => {
  const barSettings = [
    { leftPosition: 1, duration: 474 },
    { leftPosition: 5, duration: 433 },
    { leftPosition: 9, duration: 407 },
    { leftPosition: 13, duration: 458 },
    { leftPosition: 17, duration: 400 },
    { leftPosition: 21, duration: 427 },
    { leftPosition: 25, duration: 441 },
    { leftPosition: 29, duration: 419 },
    { leftPosition: 33, duration: 487 },
    { leftPosition: 37, duration: 442 },
    { leftPosition: 41, duration: 474 },
    { leftPosition: 45, duration: 433 },
    { leftPosition: 49, duration: 407 },
    { leftPosition: 53, duration: 458 },
    { leftPosition: 57, duration: 400 },
    { leftPosition: 61, duration: 427 },
    { leftPosition: 65, duration: 441 },
    { leftPosition: 69, duration: 419 },
    { leftPosition: 73, duration: 487 },
    { leftPosition: 77, duration: 442 },
    { leftPosition: 81, duration: 474 },
    { leftPosition: 85, duration: 433 },
    { leftPosition: 89, duration: 407 },
    { leftPosition: 93, duration: 458 },
    { leftPosition: 97, duration: 400 },
  ];

  return (
    <BarsContainer id="bars">
      {barSettings.map((bar, index) => (
        <Bar
          key={index}
          leftPosition={bar.leftPosition}
          duration={bar.duration}
          isPaused={isPaused}
        />
      ))}
    </BarsContainer>
  );
};
