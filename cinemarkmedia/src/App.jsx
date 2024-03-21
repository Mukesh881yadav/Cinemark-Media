import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import './index.css'


function App() {
  const [name,setName]= useState('');
  const [mob,setMob]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showCount, setShowCount] = useState(8);
  const [isActive, setIsActive] = useState(false);
  const [menubar,setMenubar]=useState(true);
  

 // Validation
// 


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

     // Validation
    let isValid = true;
    if (!/^\d{10}$/.test(mob)) {
      setMobileError('Please enter a valid 10-digit mobile number');
      isValid = false;
    } else {
      setMobileError('');
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!isValid) return;
  
    const serviceId = "service_yv333c7";
    const templateId = "template_37nbu5w";
    const userId = "9Nv-28ssASFeMq4cK";
  
    const templateParams = {
      from_name: name,
      from_email: email,
      from_contact: mob,
      message: message
    };
  
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        
        console.log('Email sent successfully:', response);
        alert("you have submited successfully")
        // Clear form fields after successful submission
        setName('');
        setMob('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log("nahi gaya")
        console.error('Email sending failed:', error);
      });
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



  const workDoneImg = [
    {
      img: "/img/1000091276.png"
    },
    {
      img: "/img/1000091278.png"
    },
    {
      img: "/img/1000091280.png"
    },
    {
      img: "/img/1000091282.png"
    },
    {
      img: "/img/1000091284.png"
    },
    {
      img: "/img/1000091286.png"
    },
    {
      img: "/img/1000091288.png"
    },
    {
      img: "/img/1000095910.png"
    },
    {
      img: "/img/1000095911.png"
    },
    {
      img: "/img/1000095912.png"
    },
    {
      img: "/img/1000095932.png"
    },
    {
      img: "/img/1000095947.png"
    },
    {
      img: "/img/1000095948.png"
    },
    {
      img: "/img/1000095949.png"
    },
    {
      img: "/img/1000095950.png"
    }, {
      img: "/img/1000095952.png"
    },
    {
      img: "/img/1000095953.png"
    },
    {
      img: "/img/1000095954.png"
    }, {
      img: "/img/1000095956.png"
    },
    {
      img: "/img/1000095957.png"
    },
    {
      img: "/img/1000095958.png"
    },
    {
      img: "/img/1000095961.png"
    },
    {
      img: "/img/1000095962.png"
    },
    {
      img: "/img/1000095963.png"
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
          <div className='flex flex-wrap gap-[32px] mt-[40px] justify-center '>
            <div className=' border-white flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/11_page-0001.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700  font-bold text-[22px] font-nunito  font-sub-content text-white '>Digital Marketing</p>
            </div>
            <div className=' border-white flex flex-col justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/sakshi.docx-5_page-0001__1_-removebg-preview.png" alt="logo" height={290} width={290}></img>
              <p className='font-sans text-gray-700 font-nunito   font-bold text-[22px] font-sub-content text-white'>Digital PR</p>
            </div>
            <div className='  border-white flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/sakshi.docx-2_page-0001 (1).png" alt="logo" height={290} width={290}></img>
              <p className='font-sans text-gray-700 font-nunito   font-bold text-[22px] font-sub-content text-white'>Youtube Marketing</p>
            </div>
            <div className=' border-white flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/sakshi.docx-1_page-0001 (1).png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito   font-bold text-[22px] font-sub-content text-white'>Meme Marketing</p>
            </div>
            <div className=' border-white flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/sakshi.docx-6_page-0001 (1).png" alt="logo" height={285} width={285}></img>
              <p className='font-sans text-gray-700 font-nunito   font-bold text-[22px] font-sub-content text-white'>Influencer Marketing</p>
            </div>
            <div className=' border-white flex flex-col  justify-betwee items-center  rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="img/sakshi.docx-4_page-0001 (1).png" alt="logo" height={310} width={310}></img>
              <p className='font-sans text-gray-700 font-nunito   font-bold text-[22px] font-sub-content text-white'>social media management</p>
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
          
          onChange={(e)=>setName(e.target.value)}
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
          
          onChange={(e)=>setMob(e.target.value)}
          placeholder='Enter Mobile Number'
          pattern="[0-9]*"
          minLength="10"
          maxLength="10"
          required
        />
    {mobileError && <p>ths is workDoneImg</p>}
      </div>
      <div className="mb-10">
        <input
          className="text-white shadow appearance-none w-full font-nunito py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-b-[1px]"
          id="contact"
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
       
          placeholder='Enter Email'
          required
        />
        
      </div>
      <div className="mb-6">
        <textarea
          className="text-white shadow appearance-none border-b-[1px]  font-nunito w-full text-gray-700 leading-tight focus:outline-none bg-black focus:shadow-outline"
          id="message"
          name="message"

          onChange={(e)=>setMessage(e.target.value)}
          placeholder='Write message here....'
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`bg-gray-700 hover:bg-white font-nunito hover:text-gray-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline`}
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
           <a> <img    className='h-15 w-14 cursor-pointer' src='/img/Picsart_24-03-21_14-24-34-837.png'></img></a>
           <a> <img    className='h-20 w-20 cursor-pointer' src='/img/linkedin-logo-linkedin-icon-transparent-free-png.png'></img></a>
           <a> <img    className='h-9 w-12 cursor-pointer' src='/img/png-clipart-computer-icons-facebook-facebook-logo-black-and-white-removebg-preview.png'></img></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
