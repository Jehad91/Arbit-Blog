import React from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector, useDispatch } from 'react-redux';
import {setPost} from '../Features/post';

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.value);

  const {isLoading, isError} = useQuery(['post'],
    () => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => dispatch(setPost(res?.data)))
    .catch((err) => console.log(err))
    )

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  return (
    <div className="ml-10 mt-2">
      <span>Title</span>
      {isLoading ? <Skeleton height="20px" className='mb-4'/> : <h1 className="mt-2 mb-4 border border-slate-200 rounded-md bg-[#f9fafc] p-3 font-bold text-lg">{post?.title}</h1>}
      <span>Details</span>
      {isLoading ? <Skeleton height="15px" count={3}/> : <p className="mt-2 mb-4 border border-slate-200 rounded-md bg-[#f9fafc] p-3 text-md">{post?.body}</p>}
    </div>
  )
}

export default SinglePost;
