import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from "react";
import "./video-player.css";
import video from "../../assets/video-profile.mp4";
const VideoPlayer = ({ playState, setPlayState, }) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };
    return (_jsx("div", { className: `video-player ${playState ? "" : "hide"}`, onClick: closePlayer, ref: player, children: _jsx("video", { src: video, autoPlay: true, muted: true, controls: true }) }));
};
export default VideoPlayer;
