import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='px-6 bg-black'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll [@media(max-width:767px)]:scrollbar-hide'> 
            <div className='flex'>
                {movies?.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
           
            </div>
        </div>
        <MovieCard/>
    </div>
  )
}

export default MovieList