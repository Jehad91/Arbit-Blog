import React, { useState } from 'react';
import axios from 'axios';
import { MdModeEdit } from 'react-icons/md';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPost } from '../Features/post';
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

function UpdateButton() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const {id} = useParams();
  const {id: userId} = useSelector(state => state.user.value);
  const posts = useSelector(state => state.posts.value);
  const [post,] = useState(posts?.find(post => post.id === +id));
  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);
  
  const handleUpdate = (id) => {
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
    else {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id,
        title,
        body,
        userId,
      })
      .then(({data}) => {
        closeModal()
        toast.success('Post Updated Successfuly!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        return dispatch(setPost(data));
      })
    }
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={openModal} className="flex items-center gap-2 bg-[#116ec9] text-white py-2 px-3 rounded-md">
        <MdModeEdit />
        <h4>Update</h4>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form className="flex flex-col gap-4">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={title} className="border p-1.5 rounded" placeholder='Title...' onChange={(event) => setTitle(event.target.value)} />
          <label htmlFor="details">Details</label>
          <textarea id="details" name="body" value={body} className="resize-none border p-1.5 h-60 rounded mb-4" placeholder='Body...' onChange={(event) => setBody(event.target.value)}  />
        </form>
        <div className="flex items-center justify-end gap-2">
          <button className="py-1 px-3 rounded-xl bg-blue-600 text-white mr-2" onClick={() => handleUpdate(id)}>Update</button>
          <button className="py-1 px-3 rounded-xl bg-red-600 text-white" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </>
  )
}

export default UpdateButton;