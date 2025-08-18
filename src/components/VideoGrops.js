import React from 'react';
import VideoList from './VideoList';

const VideoGrops = ({videos}) => {
    console.log({videos})
  return  (
    <div className='md:flex justify-around flex-wrap gap-2 md:p-2 md:m-2 rounded-md '>
     {
        videos.map((data) => {
            return (<VideoList key={data?.id} videos={data} />)
        })
     }
    </div>
  )
}

export default VideoGrops
