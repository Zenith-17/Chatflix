import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
    useTopRatedMovies();
    useUpcomingMovies();
  return (
   (
    <div className=' bg-black'>
      <div className=' mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
