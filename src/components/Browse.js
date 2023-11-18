
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
useNowPlayingMovies();
usePopularMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch?(
        <GptSearch/>):
        (<>
        <Maincontainer/>
        <SecondaryContainer/>
        </>)
      }
      
    </div>
  )
}

export default Browse