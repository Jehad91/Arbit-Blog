import React from 'react';
import { MdModeEdit } from 'react-icons/md';

function UpdateButton() {
  return (
    <button className="flex items-center gap-2 bg-[#116ec9] text-white py-2 px-3 rounded-md">
      <MdModeEdit />
      <h4>Update</h4>
    </button>
  )
}

export default UpdateButton;