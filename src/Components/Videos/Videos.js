import React from "react";
import Video from "../Video/Video";
import videos_data from "../../data";

function Videos() {
    var active = React.useRef(0);
    const [videos] = React.useState(videos_data);
    const [video, setVideo] = React.useState(videos[active.current]);

    const NextVideo = () => {
        if (active.current < videos.length) {
            active.current++;
            setVideo(videos[active.current]);
        }
    };

    const PrevVideo = () => {
        if (active.current > 0) {
            active.current--;
            setVideo(videos[active.current]);
        }
    };

    return (
        <div>
            <Video
                url={video.video.smallUrl}
                coverUrl={video.video.coverImageUrl}
                details={video.channel}
                NextVideo={NextVideo}
                PrevVideo={PrevVideo}
            />
        </div>
    );
}

export default Videos;
