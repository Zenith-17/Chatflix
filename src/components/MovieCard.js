import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr'>
        <img src={IMG_CDN_URL+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard