import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover md:h-full' src={BG_URL} alt="Background" />
        </div>
        <div className=' pt-[30%] md:p-0'>       
         <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>

    </div>
  )
}

export default GptSearch