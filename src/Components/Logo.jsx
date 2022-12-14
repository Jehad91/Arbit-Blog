import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';

function Logo() {
  return (
    <Link to='/posts'>
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="max-w-full w-8"/>
        <h1 className="font-medium lg:text-2xl md:text-lg sm:text-xs">Arbit Blog</h1>
      </div>
    </Link>
  )
}

export default Logo