import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../Features/isOpen';

const AddPostButton = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setIsOpen(true));
  }

  return (
    <div className="flex justify-end">
      <button onClick={openModal} className="flex mb-4 items-center gap-2 bg-[#116ec9] text-white py-2 px-3 rounded-md">
        <FaPlus />
        New Post
      </button>
    </div>
  )
}

export default AddPostButton;