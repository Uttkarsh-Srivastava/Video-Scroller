import React from "react";
import "./Video.css";
import Swipe from "../Swipe/Swipe";

function Video({ url, coverUrl, details, NextVideo, PrevVideo }) {
    const videoRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const video = (
        <div className="video">
            {!open ? (
                <video
                    className="video-player"
                    autoPlay
                    loop
                    ref={videoRef}
                    src={url}
                    poster={coverUrl}
                ></video>
            ) : open && details !== null ? (
                <div className="content">
                    <h1>Name : {details.user.name}</h1>
                </div>
            ) : (
                <div className="content">
                    <h1>Details Not Found</h1>
                </div>
            )}
        </div>
    );

    return (
        <div>
            <Swipe
                Component={video}
                SwipeLeft={() => setOpen(true)}
                SwipeRight={() => setOpen(false)}
                SwipeUp={() => NextVideo()}
                SwipeDown={() => PrevVideo()}
            />
        </div>
    );
}

export default Video;
