import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  // console.log(movieId);
     useMovieTrailer(movieId);
    const trailerObj = useSelector(store => store.movies?.trailerVideo);
   
    return (
        <div className='sm:pt-0 pt-16'>
            <iframe
                className="w-full aspect-video  "
                src={
                    "https://www.youtube.com/embed/" +
                    trailerObj?.key +
                    "?&autoplay=1&loop=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground;
