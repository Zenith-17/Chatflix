
import { useEffect} from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
const useNowPlayingMovies = () => {
   //Fetch data from TMDB and update store
   const dispatch=useDispatch();
   const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);
   const getNowPlayingMovies=async () => {
     const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
     const json=await data.json();
    //  console.log(json);
     dispatch(addNowPlayingMovies(json.results));
   }
   useEffect(()=>{
    if(!nowPlayingMovies)
     getNowPlayingMovies();
   },[])
   
   
}

export default useNowPlayingMovies