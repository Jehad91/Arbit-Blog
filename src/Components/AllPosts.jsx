import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../Features/posts';
import Card from './Card';

const array= new Array(9).fill("A");

const AllPosts = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {id} = useSelector(state => state.user.value);
  const posts = useSelector(state => state.posts.value);

  const { isLoading, isError } = useQuery(['posts'],
  () => axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.data?.filter((post) => post.userId === id))
  .then((data) => dispatch(setPosts(data)))
  .catch((err) => console.log(err))
  );

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  return (
    <div className="bg-white rounded-sm drop-shadow-md grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-5 py-8">
      {isLoading ? array.map((_,i)=> {
        return (
          <div key={i} className="p-3 basis-2/6">
            <Skeleton height="20px" className='mb-4' />
            <Skeleton height="15px" count={4} />
          </div>
        )
      }): posts?.map((post) => <Card key={post.id} post={post} /> )}
    </div>
  )
}

export default AllPosts;