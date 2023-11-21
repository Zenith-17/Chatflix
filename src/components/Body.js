
import Login from './Login'
import Browse from './Browse'
import Error from './Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MovieDetailsPage from './MovieDetailsPage';

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path: "/browse/:movieId",
            element: <MovieDetailsPage/>,
          },
          {
            path: "/error",
            element: <Error/>,
          },
    ]);
    
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
