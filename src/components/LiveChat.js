import React from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/chatSlice';
import { useEffect, useState } from 'react';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('')
 
    const dispatch = useDispatch();
    const chatMessageSelector = useSelector(store => store.chat.message)

   useEffect(() => {
    const interval =  setInterval(() => {
      dispatch(addMessage({name:'tejasvi', message:'guten abend'}))
     }, 2000)
     return () => clearInterval(interval);
   }, [])
    
  return (
    <div className='bg-slate-300 border  w-[30%] h-[300px] p-2'>   
    <div className='flex overflow-y-scroll h-[250px] flex-col-reverse'>
        {
            chatMessageSelector.map((data, index) => {
            return <ChatMessage key={index} name={data.name} message={data.message} />
            })
        }
     </div>
        <div className='m-2'>
            <input type="text" className='w-[60%] p-1 text-black' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
            <button className='p-2' onClick={()=> dispatch(addMessage({name:'ajuuu', message: liveMessage}))}>submit</button>
        </div>
    
  
     </div>
  )
}

export default LiveChat
