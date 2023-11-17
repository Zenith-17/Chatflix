import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerVideo=useSelector(store=>store.movies?.tralerVideo);
    useMovieTrailer(movieId);    
  return (
    <div>
        <iframe 
        className='w-screen aspect-video'
        width="560" 
        height="315" 
        src={
          "https://www.youtube.com/embed/"+
          trailerVideo?.key+
        "?&autoplay=1&mute=1"
        }
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground