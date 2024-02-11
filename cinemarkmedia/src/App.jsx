import { useState,useEffect } from 'react'
import './index.css'

function App() {
  
  useEffect(() => {
    // Smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);
  return (
    <>
     <div  className=' flex px-8 py-6	 bg-gray-600  justify-between  w-[100%] position: sticky top-0 z-10' id='home'>
      <a href="" className='text-white-600 text-white'>CINE MARK MEDIA</a>
      <ul className='flex'>
        <li className='mx-2 text-white hover:text-blue-500  hover:underline transition duration-300 ease-in-out'><a href="/home">Home</a></li>
        <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out '><a href="#about">About Us</a></li>
        <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out'><a href="#services">Services</a></li>
        <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out'><a href="#work">Work Done By Us</a></li>
        <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out'><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className='bg-hero-pattern h-screen bg-no-repeat bg-center object-cover  flex  justify-center items-center opacity-70 top-0 left-0 '>

    <div className='text-center'>
   <h1  className='text-[100px]  text-white'>Suraj Kumar Review</h1>
 <h2 className='text-[75px] text-white' > Hardik && Shubham && Sidhu</h2>
    </div>
    </div>
{/* About us */}
<div id='about' className='max-w-[1160px]  mx-auto mt-[300px]'>
  
    <div className='flex justify-between items-center'>
      <div className='text-center'>
  <h2 className='text-[32px] leading-relaxed font-sans font-bold text-gray-600'>About Us</h2>
  <p className='max-w-[700px] font-sans'>Cinemark Media is a dynamic digital marketing agency that combines 
    creativity and strategic thinking to deliver innovative and effective solutions 
    for your projects. With a focus on cutting-edge digital trends, Cinemark Media is dedicated 
    to elevating your online presence and maximizing your impact in the digital landscape.</p>
    </div>
    <div><img src="/img/logo.jpeg" alt="logo" height={400} width={400}></img></div>
    </div>


    {/* our services */}
    <div className='text-center mt-[300px]' >
    <h2 className='text-[32px] leading-relaxed font-sans font-bold text-gray-600' id='services'>Our Services</h2>
    <p className='font-sans text-gray-600'>DG Avatar specialises in all types of branding solutions and primarily serves the Film and Entertainment sector. We provide the following services:</p>
    <div className='flex flex-wrap gap-[32px] mt-[40px] justify-center'>
    <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
    <p className='font-sans text-blue-600'>Social Media Management</p>
    </div>
    <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
    <p className='font-sans text-blue-600'>Social Media Management</p>
    </div>
    <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
    <p className='font-sans text-blue-600'>Social Media Management</p>
    </div>
    <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
    <p className='font-sans text-blue-600'>Social Media Management</p>
    </div>
    <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
    <p className='font-sans text-blue-600'>Social Media Management</p>
    </div>
    <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px]shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
    <p className='font-sans text-blue-600'>Social Media Management</p>
    </div>
    </div>
    </div>

  {/* form data */}
  <h3  className=' text-center mt-[100px] text-[32px] leading-relaxed font-sans font-bold text-gray-600' id='contact'>Contact Us</h3>
  <div className="">
    <p className='font-sans text-gray-600 text-[32px] font-bold mb-[30px]'>Start a project with us today!</p>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="full-name">
        Full Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full-name" type="text" placeholder="John Doe"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="contact">
        Mobile Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="123-456-7890"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="contact">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="example@example.com"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </form>
</div>
{/* Footer */}
<div className='bg-blue-500 h-1'></div>
<div className="p-[20px] flex justify-between">
  <img src="/img/logo.jpeg" alt='company_logo_footer' height={200} width={200}></img>
  <div><ul className='flex'>
        <li className='mx-2 text-red'><a href="">Home</a></li>
        <li className='mx-2 '><a href="">About Us</a></li>
        <li className='mx-2 '><a href="">Services</a></li>
        <li className='mx-2'><a href="">Work Done By Us</a></li>
        <li className='mx-2 '><a href="">Contact</a></li>
      </ul>
      {/* <ul className='flex'>
        <li className='mx-2 text-red'><a href="">Home</a></li>
        <li className='mx-2 '><a href="">About Us</a></li>
      </ul> */}
      </div>
      <div>
<ul className='flex '>
        <li className='mx-2 text-red'><a href=""><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt=""  height={50} width={50} /></a></li>
        <li className='mx-2 text-red'><a href=""><img src="https://cdn-icons-png.flaticon.com/128/4494/4494485.png" alt=""   height={50} width={50}/></a></li>
        <li className='mx-2 text-red'><a href=""><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt=""   height={50} width={50}/></a></li>
        <li className='mx-2 text-red'><a href=""><img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt=""  height={50} width={50} /></a></li>
        <li className='mx-2 text-red'><a href=""><img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt=""   height={50} width={50}/></a></li>
      </ul>
      <p className='font-sans text-gray-600 mt-[10px] max-w-[300px]  '>Juhu Tara Rd, Uditi Tarang Housing Colony, Juhu Tara, Juhu, Mumbai, Maharashtra 400049, India</p>
</div>
</div> 

    </div>
    </>
  )
}

export default App
