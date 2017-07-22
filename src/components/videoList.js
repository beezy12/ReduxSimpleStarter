import React from 'react';
import VideoListItem from './videoListItem';

// this is a functional component because there is no need for state,
// ....we are just listing out the videos.
// *** had to add the key on each item in an array because it threw that warning.
// NOTE: see how the 'onVideoSelect' callback is passed through this component to VideoListItem for use
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;
