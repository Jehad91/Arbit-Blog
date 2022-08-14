import React from 'react';
import Comments from '../Components/Comments';
import SinglePost from '../Components/SinglePost';
import BackButton from '../Components/BackButton';
import DeleteButton from '../Components/DeleteButton';
import UpdateButton from '../Components/UpdateButton';

const Post = () => {
  return (
    <div className="bg-white rounded-sm drop-shadow-md px-5 py-8">
      <div className="w-1/2">
        <BackButton />
        <SinglePost />
        <div className="flex items-center justify-end gap-2">
          <DeleteButton />
          <UpdateButton />
        </div>
        <Comments />
      </div>
    </div>
  )
}

export default Post;
