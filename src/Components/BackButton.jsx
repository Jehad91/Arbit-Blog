import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 mb-3 cursor-pointer" onClick={() => navigate('/posts')}>
      <BsFillArrowLeftCircleFill size="2em" color="#f1edee"/>
      <h2 className="font-medium text-xl">Posts</h2>
    </div>
  )
}

export default BackButton;
