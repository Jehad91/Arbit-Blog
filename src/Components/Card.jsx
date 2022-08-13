import React from 'react';

const Card = ({post, isLoading}) => {
  return (
    <div className="p-3 basis-2/6">
      <h1 className="text-lg font-bold mb-2">{post.title}"</h1>
      <p className="text-slate-400">{post.body.slice(0, 150)} ...</p>
    </div>
  )
}

export default Card;
