import React from 'react';
import { BsGridFill, BsFillBellFill } from 'react-icons/bs';
import user from '../Assests/user.png';

const Actions = () => {
  return (
    <div className="flex justify-between items-center gap-6">
      <div className="relative">
        <h5 className="font-medium">Posts</h5>
        <span className="absolute -right-3 -top-3 rounded-full w-5 h-5 flex justify-center items-center text-xs font-semibold text-green-700 bg-[#dafcf1]">1</span>
      </div>
      <BsFillBellFill size="1.25em" color="gray"/>
      <BsGridFill size="1.25em" color="gray"/>
      <img src={user} alt="User" className="w-12 h-12 max-w-full" />
    </div>
  )
}

export default Actions;