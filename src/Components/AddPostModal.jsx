import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../Features/isOpen';
import { setPosts } from '../Features/posts';
import { toast } from 'react-toastify';

const customStyles = {
  content: {
    width: '55%',
    height: 'fitContent',
    padding: '20px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const AddPostModal = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const isOpen = useSelector(state => state.isOpen.value)
  const {id: userId} = useSelector(state => state.user.value)
  const posts = useSelector(state => state.posts.value)
  const dispatch = useDispatch();

  const handleAddPost = () => {
    if(title === '' || body === '') {
      toast.error('Please fill in all fields!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    else{
    axios.post(`https://jsonplaceholder.typicode.com/posts/`, {
      title,
      body,
      userId,
    })
    .then(({data}) => {
      closeModal()
      toast.success('Post Added Successfuly!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return dispatch(setPosts([...posts, data]));
    })
  }
}
  const closeModal = () => {
    dispatch(setIsOpen(false));
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <form className="flex flex-col gap-4" onSubmit={handleAddPost}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" className="border p-1.5 rounded" placeholder='Title...' onChange={(event) => setTitle(event.target.value)} />
        <label htmlFor="details">Details</label>
        <textarea id="details" name="body" className="resize-none border p-1.5 h-60 rounded mb-4" placeholder='Body...' onChange={(event) => setBody(event.target.value)} />
      </form>
      <div className="flex items-center justify-end gap-2">
        <button className="py-1 px-3 rounded-xl bg-blue-600 text-white mr-2" onClick={handleAddPost}>Add</button>
        <button className="py-1 px-3 rounded-xl bg-red-600 text-white" onClick={closeModal}>Close</button>
      </div>    
    </Modal>
  )
}

export default AddPostModal;
