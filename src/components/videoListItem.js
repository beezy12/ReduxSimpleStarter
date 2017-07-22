import React from 'react';

// passing in {video} like this is the same thing as passing in props, and then pulling off video right
// below and assigning it to a variable like this const video = props.video;
// but this new es6 syntax just saves us a step.
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
