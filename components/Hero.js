import HeroImage from "../public/hero.png";
import styles from "./Hero.module.css";
import { Children } from "react";

const Hero = (props) => {
  return (
    <div
      // className="flex flex-col items-center content-start justify-start pb-0.5 bg-gradient-to-bl from-blue-800 to-blue-400 min-h-screen"
      className="flex flex-col items-center content-center justify-center pb-0.5 max-h-screen min-h-[800px]"
      style={{
        width: "100%",
        height: "auto",
        // backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <figure
        className={`${styles["video-background"]} max-h-screen min-h-[800px]`}
      >
        <video
          className={styles["video-background__video"]}
          autoPlay
          loop
          playsInline
          muted
        >
          <source src="/hero.mp4"></source>
        </video>
      </figure>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Hero;
