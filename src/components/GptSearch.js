import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover' src={BG_URL} alt="Background" />
        </div>
        <div className=''>       
         <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>

    </div>
  )
}

export default GptSearch