import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt);
  return (
    <div></div>
  )
}

export default GptMovieSuggestions