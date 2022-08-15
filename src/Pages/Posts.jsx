import React from 'react'
import AddPostButton from '../Components/AddPostButton'
import AddPostModal from '../Components/AddPostModal'
import AllPosts from '../Components/AllPosts'
import { ToastContainer } from 'react-toastify';

const Posts = () => {
  return (
    <>
      <AddPostButton />
      <AddPostModal />
      <AllPosts />
      <ToastContainer />
    </>
  )
}

export default Posts