import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const Maincontainer = () => {
    const movies=useSelector(store=>store.movies?.popularMovies);
    
    if(!movies)
    return "cannot fetch movies";

    const mainMovie=movies[8];
  
    const {original_title,overview,id}=mainMovie;
  
    return (
    <div className='md:pt-0 pt-[20%] bg-black'>
        <VideoTitle title={original_title} overview={overview}/>
    
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default Maincontainer
