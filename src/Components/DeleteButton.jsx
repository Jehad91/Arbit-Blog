import React from 'react';
import {RiDeleteBin6Fill} from 'react-icons/ri';

const DeleteButton = () => {
  return (
    <button className="flex items-center gap-2 bg-[#ff004e] text-white py-2 px-3 rounded-md">
      <RiDeleteBin6Fill />
      <h4>Delete</h4>
    </button>
  )
}

export default DeleteButton;