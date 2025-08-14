import React from 'react'
import Comments from './Comments'

const CommentList = ({comments}) => {
    return comments.map((res) => (       
            <div>
                <Comments key={res.id} data={res}/>
                  <div className='ml-5 border-l-2 border-b-cyan-800 w-3/5'>
                     <CommentList key={res?.comment.id} comments={res?.comment} />
                  </div>
            </div>
    
    ))
  
}

export default CommentList
