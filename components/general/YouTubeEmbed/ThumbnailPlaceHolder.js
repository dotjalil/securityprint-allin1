import { useTransition } from "react";
import Image from "next/image";
import styles from "./ThumbnailPlaceHolder.module.scss";
import Thumb from "../../../public/thumb.png";
import Play from "../../../public/play.svg";

const ThumbnailPlaceHolder = (props) => {
  // useTransition is used to let React know there will be a
  // rerender when the button is pressed.
  const [, startTransition] = useTransition();

  return (
    <button
      className={styles.thumbnailButton}
      onClick={() => {
        startTransition(() => {
          props.onThumbClick(true);
        });
      }}
    >
      <div className={styles.videoInner}>
        <Image
          width={500}
          height={500}
          alt="Fwar - Mushrooms video thumbnail"
          src={`https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`}
          className={styles.thumbnailImage}
          loading="lazy"
        />
        <Image
          width={100}
          height={100}
          alt="Play Video"
          src={Play}
          loading="lazy"
          className={styles.playIcon}
        />
      </div>
    </button>
  );
};

export default ThumbnailPlaceHolder;
