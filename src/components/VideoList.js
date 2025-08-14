import React from 'react'
import { Link } from 'react-router-dom';

const VideoList = ({videos}) => {

  return (
    <div className='gap-3 w-3/12 p-3 hover:bg-slate-100 rounded-md'>
        <Link to={'/watch?v='+ videos?.contentDetails?.videoId }>
        <img src={videos?.snippet?.thumbnails?.standard?.url} alt="thumbnails" className='rounded-md' />
         {videos?.snippet?.title}
      </Link>
    </div>
  )
}

export default VideoList;
