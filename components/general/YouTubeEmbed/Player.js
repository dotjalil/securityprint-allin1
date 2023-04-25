import YouTube from "react-youtube";
import styles from "./Player.module.scss";

const Player = (props) => {
  // Once the YouTube package (react-youtube) has loaded
  // tell the thumbnail it is no longer needed.
  // Play the video.
  const _onReady = (event) => {
    props.setHasLoaded(true);
    event.target.playVideo();
  };
  return (
    <YouTube
      videoId={props.videoId}
      onReady={_onReady}
      className={styles.videoInner}
      iframeClassName={styles.videoInner}
    />
  );
};

export default Player;
