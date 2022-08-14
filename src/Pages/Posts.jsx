import React from 'react'
import AllPosts from '../Components/AllPosts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Posts = () => {
  return (
    <div>
      <AllPosts />
      <ToastContainer />
    </div>
  )
}

export default Posts