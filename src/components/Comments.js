import React from 'react'

const Comments = ({data}) => {
  return (
    <div>
       <div className='p-3 m-3 flex bg-gray-200 w-[50%] gap-3' >
     <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='w-12 rounded-full' alt="img" />
     </div>
     <div>
      <p>{data?.user}</p>
      <p>{data?.text}.</p>
     </div>
    </div>
    </div>
  )
}

export default Comments;
