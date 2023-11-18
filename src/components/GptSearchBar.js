import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
const GptSearchBar = () => {
  const dispatch=useDispatch();
  const searchText=useRef(null);
  const langKey=useSelector(store=>store.config.lang);

  //take a movie and search movie using tmdb search api

  const searchMovieTMDB=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+
    movie +
    "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
    );

    const json=await data.json();
    return json.results;
  }
  const handleGptSearchClick= async ()=>{
    // console.log(searchText.current.value);
    //make an api call to GPT API and get Movie Results
    const gptQuery="Act as a Movie Recomendation system and suggest some movies for the query "+searchText.current.value+". only give me 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmal, Krish";
   const gptResults= await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices)
    {//TODO:Write error handling message or take it to error page}
    // console.log(gptResults.choices);
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

    //for each movie search tmdb api

    const promiseArray=gptMovies.map(movie => searchMovieTMDB(movie));
    
    const tmdbResuts=await Promise.all(promiseArray);

    console.log(tmdbResuts);

    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResuts}));
  }
}

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchText}
        type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
        <button className='py-2 col-span-3 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick} >{lang[langKey].search}</button>
        </form>
    </div>
  )
}


export default GptSearchBar