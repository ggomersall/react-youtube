import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    // use map to generate the lis of each video
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect} //passes down to video_list_item
                key={video.etag}
                video={video} />
        )
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;