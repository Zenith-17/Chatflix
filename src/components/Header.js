import React,{useEffect} from 'react'
import {signOut ,onAuthStateChanged,getAuth} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { USER_AVATAR } from '../utils/constants'; 
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
    const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
    const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
       
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  //handled navigation in useEffect() because we wanted a place which is always there ie Header and is inside the router provider 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          //User signed in case
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
        } else {
          // User is signed out case
          dispatch(removeUser());
         navigate("/");
        }
      });

      //unmonting
      return ()=>unsubscribe();
},[])

const handleGptSearchClick=()=>{
  //toggle gpt search button
  dispatch(toggleGptSearchView());
}

const handleLanguageChange=(e)=>{
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value));
}
  return (
    <div className=' absolute w-screen px-2 py-4 z-10 flex justify-between'>
        <img className='w-44 px-8' src={LOGO}alt="APP LOGO" />
    
    {user &&
    (<div className='flex p-2'>
      {showGptSearch && (<select className='p-2 bg-gray-500 text-white m-2' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
      </select>)}
      <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2' onClick={handleGptSearchClick}>
        {showGptSearch?"Homepage":"GPT Search"}
      </button>
        <img
        className='w-12 h-12' 
        src={USER_AVATAR} alt="UserImage" />
        <button className='font-bold text-gray-700 mx-12' onClick={handleSignOut}>Sign Out </button>
      </div>)}
    </div>
    
  )
}

export default Header