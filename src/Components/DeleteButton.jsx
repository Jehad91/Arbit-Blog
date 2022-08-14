import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import { setPosts } from '../Features/posts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.value);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        toast.success('Post Deleted Successfuly!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        dispatch(setPosts(posts.filter(post => post.id !== +id)));
      }).then(() => navigate('/posts'));
  };
  
  return (
    <>
      <button onClick={() => handleDelete(id)} className="flex items-center gap-2 bg-[#ff004e] text-white py-2 px-3 rounded-md">
        <RiDeleteBin6Fill />
        <h4>Delete</h4>
      </button>
    </>
  )
}

export default DeleteButton;