import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
    return(
        <div className="video-item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem;