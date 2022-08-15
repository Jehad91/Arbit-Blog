import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import { setPosts } from '../Features/posts';
import { toast, ToastContainer } from 'react-toastify';

const DeleteButton = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.value);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        toast.success('Post Deleted Successfuly!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        dispatch(setPosts(posts.filter(post => post.id !== +id)));
      })
  };
  
  return (
    <>
      <button onClick={() => handleDelete(id)} className="flex items-center gap-2 bg-[#ff004e] text-white py-2 px-3 rounded-md">
        <RiDeleteBin6Fill />
        <h4>Delete</h4>
      </button>
      <ToastContainer />
    </>
  )
}

export default DeleteButton;