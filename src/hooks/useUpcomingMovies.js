
import { useEffect} from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
const useUpcomingMovies = () => {
   //Fetch data from TMDB and update store
   const dispatch=useDispatch();
   const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies)
   const getUpcoingMovies=async () => {
     const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
     const json=await data.json();
    //  console.log(json); 
    // console.log(json.results);
     dispatch(addUpcomingMovies(json.results));
   }
   useEffect(()=>{
    !upcomingMovies && getUpcoingMovies();
   },[])
   
   
}

export default useUpcomingMovies