import React from 'react';
import { useSearchParams } from "react-router-dom";
import  CommentsContainer  from './CommentsContainer';
import LiveChat from './LiveChat';


const Watch = ({}) => {
     const [searchParams] = useSearchParams();
     const videoId = searchParams.get("v");
  return (
    <div className='pt-8 pl-[10%]'>
      <div className='flex justify-around'>
        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + videoId } title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
        <LiveChat />
      </div>
   
  
       <CommentsContainer />
    </div>

  )
}

export default Watch
