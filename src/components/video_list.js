import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const vidList = props.videos.map((video) => {
        return <VideoListItem selectedVideo = {props.onVideoSelect} video = {video} key={video.etag}/>
    })  
    console.log(vidList)
        return (
        <ul className ="col-md-4 list-group">
                {vidList}
        </ul>
        )
    
}

export default VideoList