
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse