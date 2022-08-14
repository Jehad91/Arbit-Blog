import React from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Comments = () => {
  const { id } = useParams();

  const {data: comments, isLoading, isError} = useQuery(['comments'],
    () => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => res.data)
    .catch((err) => console.log(err))
    )

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }
  
  return (
    <div className="ml-10 mt-10">
      <span>Comments</span>
      {isLoading ?
        <Skeleton height="15px" count={3}/> :
        comments?.map((comment, index) => <p key={index} className="p-3 rounded-md border-2 my-2">{comment.body}</p>)}
    </div>
  )
}

export default Comments