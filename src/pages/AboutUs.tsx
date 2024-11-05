import ReactPlayer from "react-player"
import Video from "../assets/videos/21-12-2024.mp4"
export const AboutUs = () => {
  return (
    <div>      <ReactPlayer 
    url={Video} 
    playing 
    controls={false} 
    height='100vh' 
    loop={true}
  /></div>
  )
}
