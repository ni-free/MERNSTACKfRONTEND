import React from 'react'
import { todo } from '../images/index.js'
import { Link } from 'react-router-dom'
import Login from './Login.jsx'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const history= useNavigate()
  const change=(e)=>{
       e.preventDefault()
       history('/login')
  }
  return (
   <section className='bg-black top-0 fixed w-[100%] ml-[0px]'  ><div className='h-[100%] w-[100%] bg-black text-white flex top-0'>
  <div className='flex flex-col  w-[70vh] mt-20 mr-32 mb-20 ml-20 text-center'>
    <h2 className='sm:text-5xl text-2xl font-semibold sm:leading-snug font-poppins text-left'>Become your most <br /> productive self with <br /> TODO</h2>
     <h3 className='mt-4 mb-4 text-white-300 font-semibold text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore ducimus dolorem adipisci obcaecati id tenetur ut non quos magnam.</h3>
     
     <button className='btn ' onClick={change}>Lets get started </button>
  </div>
  <div className='h-[50vh] w-[220px]   mt-44 mr-32 mb-20 ml-20'>
    <img src={todo} alt="bg" />
  </div>
   </div>
   </section>
  )
  
}

export default Home
