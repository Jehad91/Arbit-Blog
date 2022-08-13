import React from 'react';
import Actions from './Actions';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 mb-6 rounded-sm drop-shadow-md">
      <Logo />
      <Actions />
    </div>
  )
}

export default Header;
