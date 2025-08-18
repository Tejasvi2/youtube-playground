import React from 'react'
import { Link } from 'react-router-dom';

const VideoList = ({videos}) => {

  return (
    <div className='gap-3 md:w-[32%] p-3 hover:bg-slate-100 rounded-md'>
        <Link to={'/watch?v='+ videos?.id }>
        <img src={videos?.snippet?.thumbnails?.standard?.url} alt="thumbnails" className='rounded-md' />
         <p className='font-medium p-3 pl-0 pb-1'>{videos?.snippet?.title}</p>
         <p className='text-gray-400 text-sm'>{videos?.snippet?.channelTitle}</p>
         <div className='flex justify-between'>
        

         </div>
      </Link>
    </div>
  )
}

export default VideoList;
