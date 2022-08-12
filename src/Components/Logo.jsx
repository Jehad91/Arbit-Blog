import React from 'react';
import logo from '../Assests/logo.png';

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img src={logo} alt="Logo" className="max-w-full w-8"/>
      <h1 className="font-medium text-2xl">Arbit Blog</h1>
    </div>
  )
}

export default Logo