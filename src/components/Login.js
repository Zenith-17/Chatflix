import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';
const Login = () => {
  const dispatch=useDispatch();
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  // we have not used useState and used the useRef hook because we wanted a refernce to the input box as we want to find out what we have inside the input box 
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick=()=>{
      //Validate the form data
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);

      // if any message is returned means there is an error and if null is returned then it means we can go ahead
      if(message)return;

      //If all fields are valid SignIn/SignUp
      //create a new user for sign up
      if(!isSignInForm)
      {
        //Sign up logic
        createUserWithEmailAndPassword(
          auth,
           email.current.value,
           password.current.value
           )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //as soon as new user is successfully registered update the profile with name and photo url
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/99113156?v=4"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              })); 
    }).catch((error) => {
      setErrorMessage(error.message);
    });
    
  })
  .catch((error) => {

    setErrorMessage("Registeration failed please try again.");
  });

      }
      else{
        //Sign in logic
        signInWithEmailAndPassword( 
           auth,
          email.current.value,
          password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    
    setErrorMessage("User not found please register first.");
  });
      }
      
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img className='h-screen object-cover' src={BG_URL} alt="Background" />
        </div>
        <form 
        onSubmit={(e)=>e.preventDefault()} 
        className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-md'>
          <h1 className='font-bold text-4xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm &&
          (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-md bg-gray-700' ref={name} /> 
          
          
          )
          }
          <input
          ref={email} 
          type="text" 
          placeholder='Email Address' 
          className='p-4 my-4 w-full rounded-md bg-gray-700' />
          <input 
          ref={password}
          type="password"
          placeholder='Password' 
          className='p-4 my-4 w-full rounded-md bg-gray-700' />
          <p className=' text-red-700 font-bold text-lg py-2'>{errorMessage}</p>
          <button 
          className='py-4 my-6 bg-red-700 w-full rounded-md' 
          onClick={handleButtonClick}>
            {isSignInForm?"Sign In":"Sign Up"}
            </button>
          <p 
          className='py-4 hover:cursor-pointer' 
          onClick={toggleSignInForm}>
            {isSignInForm?"New to Chatflix? Sign Up Now":"Already a User. Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login;