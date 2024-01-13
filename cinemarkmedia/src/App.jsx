import { useState } from 'react'
import './index.css'

function App() {
  

  return (
    <>
     <div  className=' flex px-8 py-6	 bg-gray-600  justify-between  w-[100%]'>
      <a href="" className='text-white-600 text-white'>CINE MARK MEDIA</a>
      <ul className='flex'>
        <li className='mx-2 text-white'><a href="">Home</a></li>
        <li className='mx-2 text-white'><a href="">About Us</a></li>
        <li className='mx-2 text-white'><a href="">Services</a></li>
        <li className='mx-2 text-white'><a href="">Work Done By Us</a></li>
        <li className='mx-2 text-white'><a href="">Contact</a></li>
      </ul>
    </div>
    <div className='bg-hero-pattern h-screen bg-no-repeat bg-center object-cover  flex  justify-center items-center opacity-70 top-0 left-0 '>

    <div className='text-center'>
   <h1  className='text-[100px]  text-white'>Suraj Kumar Review</h1>
 <h2 className='text-[75px] text-white' > Hardik && Shubham && Sidhu</h2>
    </div>
    </div>
    
    </>
  )
}

export default App
