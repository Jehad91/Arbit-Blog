import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({post}) => {
  return (
    <div className="p-3 basis-2/6">
      <Link to={`/posts/${post.id}`}>
        <h1 className="text-lg font-bold mb-2">{post.title}"</h1>
        <p className="text-slate-400">{post.body.slice(0, 150)} ...</p>
      </Link>
    </div>
  )
}

export default Card;
