import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = props => {
    const videos = props.videos;
    const videoList = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId}/>
    });
    console.log(videos);
    return (<div className="ui relaxed divided list">
        {videoList}
    </div>);
};

export default VideoList;