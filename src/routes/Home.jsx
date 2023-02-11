import React from 'react'
import img from '../images/mylogo.png'
import { Link } from 'react-router-dom'
export  const Home = () => {
  return (
    <div className=' rounded-xl bg-gradient-to-r from-green-300 via-green-700 shadow-xl w-3/4 max-w-7xl  h-[600px] mx-auto flex items-center mt-40 p-14'>
       <div className=''>
           <h1 className='text-5xl font-[800] mb-6'>Hangman Game</h1>
           <p className='text-xl mb-12 pr-40 '>Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.</p>
           <Link to={'/play'} className='bg-green-700 text-white py-4 px-12 rounded-full hover:bg-green-500 font-semibold'> Get Started</Link>
       </div>
       <img src={img} alt='images'/>
    </div>
  )
}
