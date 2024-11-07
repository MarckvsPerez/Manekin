import ReactPlayer from "react-player";
import Video from "../assets/videos/21-12-2024.mp4";
import { transition } from "../components/Transitions";
import Logo from "../assets/Logo.svg";

export const AboutUs = () => {
  return (
    <div>
      <ReactPlayer
        url={Video}
        playing
        controls={false}
        height="100vh"
        loop={true}
      />
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export const AboutUsPage = transition(AboutUs);
