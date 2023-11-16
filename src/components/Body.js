import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
const Body = () => {
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ]);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              //User signed in case
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              
            } else {
              // User is signed out case
              dispatch(removeUser());
             
            }
          });
    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body