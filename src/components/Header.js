import React,{useEffect} from 'react'
import {signOut ,onAuthStateChanged,getAuth} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";


const Header = () => {
    const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
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
    onAuthStateChanged(auth, (user) => {
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
},[])
  return (
    <div className=' absolute w-screen px-2 py-4 z-10 flex justify-between'>
        <img className='w-44 px-8' src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1052/2020/12/17062216/netflix-logo.png" alt="" />
    
    {user &&
    (<div className='flex p-2'>
        <img
        className='w-12 h-12' 
        src="https://tse2.mm.bing.net/th?id=OIP.RE_WgzICByGEGmvLtanb6QHaHa&pid=Api&P=0&h=180" alt="UserImage" />
        <button className='font-bold text-gray-700 mx-12' onClick={handleSignOut}>Sign Out </button>
      </div>)}
    </div>
    
  )
}

export default Header