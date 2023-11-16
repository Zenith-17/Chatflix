import React from 'react'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector(store=>store.user);
    const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className=' absolute w-screen px-2 py-4 z-10 flex justify-between'>
        <img className='w-44 px-8' src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1052/2020/12/17062216/netflix-logo.png" alt="" />
    
    {user &&
    (<div className='flex p-2'>
        <img
        className='w-12 h-12' 
        src={user.photoURL} alt="UserImage" />
        <button className='font-bold text-white mx-12' onClick={handleSignOut}>Sign Out </button>
      </div>)}
    </div>
    
  )
}

export default Header