import { useState, useEffect } from 'react'
import './index.css'


function App() {
  const [showCount, setShowCount] = useState(8);
  const [isActive, setIsActive] = useState(false);
  const [menubar,setMenubar]=useState(true);
  const [sidebar,setSidebarh]=useState(true)


  const handleClickside= () => {
    // Toggle the state between true and false
   
  };
  const handleClick = () => {
    console.log("data")
    setIsActive(true);
    setMenubar(false)
  };
  const closesidebar=()=>{
    setIsActive(false)
    setMenubar(true)
  }
  const handleShowMore = () => {
    setShowCount(prevCount => prevCount + 8);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            // inline: 'nearest', 
            offsetTop: 100
          });
        }
      });
    });
  }, []);
  

//  Form Validation

const [formData, setFormData] = useState({
  fullName: { value: '', touched: false },
  mobileNumber: { value: '', touched: false },
  email: { value: '', touched: false },
  message: { value: '', touched: false }
});

console.log(formData)
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: { value, touched: true }
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Perform form submission or validation here
  // For simplicity, let's just log the form data
  console.log(formData);
};

const validateMobileNumber = (mobileNumber) => {
  // Regular expression for validating Indian mobile numbers
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobileNumber);
};

const validateEmail = (email) => {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

  const workDoneImg = [
    {
      img: "/img/m1.png"
    },
    {
      img: "/img/m2.png"
    },
    {
      img: "/img/m3.png"
    },
    {
      img: "/img/m4.png"
    },
    {
      img: "/img/m5.png"
    },
    {
      img: "/img/m6.png"
    },
    {
      img: "/img/m7.png"
    },
    {
      img: "/img/m9.png"
    },
    {
      img: "/img/m10.png"
    },
    {
      img: "/img/m11.png"
    },
    {
      img: "/img/m12.png"
    },
    {
      img: "/img/m13.png"
    },
    {
      img: "/img/m14.png"
    },
    {
      img: "/img/m15.png"
    },
    {
      img: "/img/m16.png"
    }, {
      img: "/img/m17.png"
    },
    {
      img: "/img/m18.png"
    },
    {
      img: "/img/m19.png"
    }, {
      img: "/img/m20.png"
    },

  ]
  return (
    <>
   
      <div className={ `flex px-2 py-4 md:px-5 md:py-4 lg:px-5 lg:py-4 transition-all duration-500	transition-all duration-500 bg-black  justify-between  w-[100%] position: sticky top-0 z-10`} id='home'>
       
        <ul className={`${isActive ?"transition-all duration-500 items-center flex-col md:flex-col lg:flex  h-screen md:screen ":"hidden md:hidden lg:flex"}  w-[100%] justify-between`}>
      <a href="/" className='text-white-600   flex  items-center text-white justify-center'><img src="/img/Mobile logo.png" alt="logo" height={50} width={50}></img> <span className="text-[16px] font-sub-content  md:text-[20px] font-sans text-whit mx-2 ">CineMark Media</span></a>
      <div className={`${isActive?"transition-all duration-500 flex-col md:flex-col lg:flexmt-[50px]":""} flex items-center gap-x-[50px] mt-5 md:mt-0 lg:mt-0`}>
          <li  onClick={closesidebar} className='mx-2 text-white hover:font-medium animate-pulse hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="\">Home</a></li>
          <li onClick={closesidebar} className='mx-2 text-white  hover:font-medium animate-pulse hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="#about">About Us</a></li>
          <li onClick={closesidebar} className='mx-2 text-white  hover:font-medium  animate-pulse hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="#services">Services</a></li>
          <li onClick={closesidebar} className='mx-2 text-white  hover:font-medium animate-pulse  hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="#work">Our Work</a></li>
          <li onClick={closesidebar} className='mx-2 text-white  hover:font-medium  animate-pulse hover:underline transition duration-300 ease-in-out font-nunito'><a href="#contact">Contact</a></li>
          </div>
       
        </ul>
        { isActive && <img  className={`block md:block lg:hidden 'bg-gray-300 text-black'} h-10 w-10 absolute right-[10px]`} onClick={closesidebar} src='/img/cross.png'></img>}
        {menubar && <a href="" className='text-white-600   block md:block lg:hidden flex  items-center text-white justify-center'><img src="/img/Mobile logo.png" alt="logo" height={50} width={50}></img> <span className="text-[16px] font-sub-content  md:text-[20px] font-sans text-whit mx-2 ">CineMark Media</span></a>}
       {menubar && <img  className={"block md:block lg:hidden absolute top-6 right-4"}  onClick={handleClick} src='/img/hamburger.svg' height={30} width={30}></img>}
      </div>
      <div  id="d" className='bg-hero-pattern   bg-cover h-screen bg-no-repeat bg-center  opacity-90 flex  justify-center items-center  top-0 left-0 '>
        <div className='text-center'>
          <h1 className='text-[80px] lg:text-[150px]  text-white animate-bounce' >CineMark media</h1>
          <h2 className='text-[75px] text-white' ></h2>
        </div>
      </div>
      {/* About us */}
      <div id='about' className='px-[25px] pt-[60px] md:pt-[100px]  md:px-[100px]  bg-black'>
        <div className='flex justify-between items-center flex-col md:flex-col lg:flex-row'>
          <div className='text-center'>
            <h2 className='text-[28px] leading-relaxed font-sans font-bold text-gray-600 text-white'>About Us</h2>
            <p className='max-w-[700px] text-[16px] font-sub-content  md:text-[20px] font-sans text-white mt-5 '>Cinemark Media is a dynamic digital marketing agency that combines
              creativity and strategic thinking to deliver innovative and effective solutions 
              for your projects. With a focus on cutting-edge digital trends, Cinemark Media is dedicated
              to elevating your online presence and maximizing your impact in the digital landscape.</p>
          </div>
          <div className='mt-10 animate-pulse font'><img src="/img/newLogo.png" alt="logo" height={400} width={400}></img></div>
        </div>


        {/* our services */}
        <div className='text-center mt-[100px]' >
          <h2 className='text-[32px] leading-relaxed font-sans font-bold font-sans  text-white' id='services'>Our Services</h2>
          <p className='font-sans text-white  text-[16px]  md:text-[20px] mt-5  font-sub-content'>DG Avatar specialises in all types of branding solutions and primarily serves the Film and Entertainment sector. We provide the following services:</p>
          <div className='flex flex-wrap gap-[32px] mt-[40px] justify-center'>
            <div className='flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/Social_media_management-removebg-preview.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  font-sub-content text-white '>Digital Marketing</p>
            </div>
            <div className='flex flex-col justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/Social_media_management-removebg-preview.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  font-sub-content text-white'>Digital PR</p>
            </div>
            <div className='flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/Social_media_management-removebg-preview.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  font-sub-content text-white'>Youtube Marketing</p>
            </div>
            <div className='flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/Social_media_management-removebg-preview.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  font-sub-content text-white'>Meme Marketing</p>
            </div>
            <div className='flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/Social_media_management-removebg-preview.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  font-sub-content text-white'>Twiter Marketing</p>
            </div>
            <div className='flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/Social_media_management-removebg-preview.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  font-sub-content text-white'>social media management</p>
            </div>
          </div>
        </div>
        {/* work done by us */}

        <div className='text-center mt-[100px]' id='work' >
          <h3 className=' text-center mt-[100px] text-[32px] leading-relaxed font-sans font-bold text-white font-sans'
          >Our Work</h3>
          <div className='flex flex-wrap gap-[32px] mt-[40px] justify-center'>


            {workDoneImg.slice(0, showCount).map((ele, i) => (
              <div key={i} className='flex flex-col items-center bg-gradient-to-t  hover:from-gray hover:to-white from-white to-gray rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
                <img src={ele.img} alt="logo" height={250} width={250}></img>
              </div>
            ))}

          </div>
          {showCount < workDoneImg.length && (
          <button
            onClick={handleShowMore}
            className="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 mt-[50px] px-6 rounded focus:outline-none focus:shadow-outline" type="button"
          >
            {showCount < workDoneImg.length ? 'Show More' : 'No More Content'}
          </button>
        )}
        </div>

        
        {/* form data */}
        <h3 className=' text-center mt-[100px] text-[32px] leading-relaxed font-sans font-bold text-white text-[18px]  md:text-[24px] font-sans'>Contact Us</h3>
        <div className="">
          <p className='font-sans text-white text-[32px] font-bold mb-[30px] text-[18px]  text-center md:text-start md:text-[24px] font-sans'>Start a project with us today!</p>
          <form className="bg-black shadow-md rounded lg:px-8 lg:pt-6 pb-8 lg:mb-4" onSubmit={handleSubmit}>
      <div className="mb-10">
        <input
          className="shadow appearance-none text-white w-full font-nunito py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-b-[1px]"
          id="full-name"
          type="text"
          name="fullName"
          value={formData.fullName.value}
          onChange={handleChange}
          placeholder='Enter Your Name'
          required
        />
      </div>
      <div className="mb-10" id='contact'>
        <input
          className="text-white shadow appearance-none w-full font-nunito  py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-b-[1px]"
          id="contact"
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber.value}
          onChange={handleChange}
          placeholder='Enter Mobile Number'
          pattern="[0-9]*"
          minLength="10"
          maxLength="10"
          required
        />
        {formData.mobileNumber.touched && !validateMobileNumber(formData.mobileNumber.value) && <p className="text-red-500 font-nunito">Please enter a valid mobile number</p>}
      </div>
      <div className="mb-10">
        <input
          className="text-white shadow appearance-none w-full font-nunito py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-b-[1px]"
          id="contact"
          type="email"
          name="email"
          value={formData.email.value}
          onChange={handleChange}
          placeholder='Enter Email'
          required
        />
          {formData.email.touched && !validateEmail(formData.email.value) && <p className="text-red-500 font-nunito">Please enter a valid email address</p>}
      </div>
      <div className="mb-6">
        <textarea
          className="text-white shadow appearance-none border-b-[1px]  font-nunito w-full text-gray-700 leading-tight focus:outline-none bg-black focus:shadow-outline"
          id="message"
          name="message"
          value={formData.message.value}
          onChange={handleChange}
          placeholder='Write message here....'
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`${formData?"bg-white":"bg-gray-400"} hover:bg-gray-700 font-nunito hover:text-white text-black font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline`}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
        </div>
        {/* Footer */}
        <div className='bg-white h-1 '></div>
        <div className="flex-col justify-center items-center text-center mt-10">
          <h3 className='font-sub-content text-white cursor-pointer '>mukesh881yadav@gmail.com</h3>
          <h3 className='font-sub-content text-white  mt-3'>mukesh.yadav1fiance.co.in</h3>
          <div className='flex justify-center items-center'>
           <a> <img    className='h-20 w-20 cursor-pointer' src='/img/insta.png'></img></a>
           <a> <img    className='h-20 w-20 cursor-pointer' src='/img/insta.png'></img></a>
           <a> <img    className='h-20 w-20 cursor-pointer' src='/img/insta.png'></img></a>
           <a> <img    className='h-20 w-20 cursor-pointer' src='/img/insta.png'></img></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
