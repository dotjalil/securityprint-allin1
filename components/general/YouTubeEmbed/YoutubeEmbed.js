import { useState, lazy } from "react";
import ThumbnailPlaceHolder from "./ThumbnailPlaceHolder";
import styles from "./ThumbnailPlaceHolder.module.scss";

const Player = lazy(() => import("./Player"));

const YoutubeEmbed = (props) => {
  // These two states handle the button press, and
  // the loading of the YouTube iframe.
  const [showVideo, setShowVideo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  function handleThumbClick() {
    setShowVideo(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.videoRatio}>
        {
          // If the button has not been pressed, and the YouTube
          // video is not loading - keep the button rendered.
        }
        {(!showVideo || !hasLoaded) && (
          <ThumbnailPlaceHolder
            onThumbClick={handleThumbClick}
            videoId={props.videoId}
          />
        )}
        {showVideo && (
          <Player videoId={props.videoId} setHasLoaded={setHasLoaded} />
        )}
      </div>
    </div>
  );
};

export default YoutubeEmbed;
