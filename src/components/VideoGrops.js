import React from 'react';
import VideoList from './VideoList';

const VideoGrops = ({videos}) => {
    console.log({videos})
  return  (
    <div className='flex justify-around flex-wrap gap-2 p-2 m-2 rounded-md '>
     {
        videos.map((data) => {
            return (<VideoList key={data?.id} videos={data} />)
        })
     }
    </div>
  )
}

export default VideoGrops
