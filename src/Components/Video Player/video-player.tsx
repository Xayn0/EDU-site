import React, { Dispatch, SetStateAction, useRef } from "react";
import "./video-player.css";
import video from "../../assets/video-profile.mp4";
const VideoPlayer = ({
  playState,
  setPlayState,
}: {
  playState: boolean;
  setPlayState: Dispatch<SetStateAction<boolean>>;
}) => {
  const player = useRef<HTMLDivElement>(null);
  const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
      ref={player}
    >
      
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
