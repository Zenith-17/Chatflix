import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
// import MovieDetailsPage from './MovieDetailsPage';

const MovieCard = ({posterPath,id}) => {
  if(!posterPath)
  return null;
  // const showMovieDeatils=()=>{
  //   // console.log(id);
  //   <MovieDetailsPage movieId={id} />
  // }
  return (
    <div className='w-36 md:w-48 cursor-pointer hover:scale-105 transition-transform'>
        <Link to={"/browse/" + id}>
        <img src={IMG_CDN_URL+posterPath} alt="Movie Card" />
        </Link>
        
    </div>
  )
}

export default MovieCard


 
