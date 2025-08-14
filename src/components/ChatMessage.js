import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex gap-2 items-center border-b-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="chat-msg" className='w-12' />
        <p className='font-bold'>{name}</p>
        <p className='text-sm'>{message}</p>
    </div>
  )
}

export default ChatMessage
