import React from 'react';
import CommentList from './commentList';
import { commetsData } from '../utils/Constant';


const CommentsContainer = () => {
  return (
    <div className='m-5'>
        <p className='text-xl'>Commets: </p>
        <CommentList comments={commetsData} />      
    </div>
  )
}

export default CommentsContainer
