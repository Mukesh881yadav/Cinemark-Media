import { useState, useEffect } from 'react'
import './index.css'


function App() {
  const [showCount, setShowCount] = useState(8);
  const [isActive, setIsActive] = useState(false);
  const [menubar,setMenubar]=useState(true)
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

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
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
      <div className={ `flex px-8 py-6 transition-all duration-500	transition-all duration-500 bg-gray-600  justify-between  w-[100%] position: sticky top-0 z-10`} id='home'>
       
        <ul className={`${isActive?"transition-all duration-500 flex-col md:flex-col lg:flex  h-screen md:screen ":"hidden md:hidden lg:flex"}  w-[100%] justify-between`}>
      <a href="" className='text-white-600 text-white'>CINE MARK MEDIA</a>
      <div className={`${isActive?"transition-all duration-500 flex-col md:flex-col lg:flex  items-center mt-[50px]":""} flex gap-x-[50px]`}>
          <li className='mx-2 text-white hover:text-blue-500  hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="/">Home</a></li>
          <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="#about">About Us</a></li>
          <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="#services">Services</a></li>
          <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out mb-5 lg:mb-0 font-nunito'><a href="#work">Our Work</a></li>
          <li className='mx-2 text-white  hover:text-blue-500  hover:underline transition duration-300 ease-in-out font-nunito'><a href="#contact">Contact</a></li>
          </div>
       
        </ul>
        { isActive && <img  className={`block md:block lg:hidden 'bg-gray-300 text-black'} h-10 w-10`} onClick={closesidebar} src='/img/cross.png'></img>}
       {menubar && <img  className={"block md:block lg:hidden absolute top-3 right-5"}  onClick={handleClick} src='/img/hamburger.svg' height={30} width={30}></img>}
      </div>
      <div className='bg-hero-pattern h-screen bg-no-repeat bg-center object-cover  flex  justify-center items-center opacity-70 top-0 left-0 '>
        <div className='text-center'>
          <h1 className='text-[100px]  text-white'>suraj padwa sala</h1>
          <h2 className='text-[75px] text-white' > Hardik mota bhosdi ka</h2>
        </div>
      </div>
      {/* About us */}
      <div id='about' className='px-[25px] pt-[60px] md:pt-[100px]  md:px-[100px]  bg-black'>
        <div className='flex justify-between items-center flex-col md:flex-col lg:flex-row'>
          <div className='text-center'>
            <h2 className='text-[28px] leading-relaxed font-sans font-bold text-gray-600 text-white'>About Us</h2>
            <p className='max-w-[700px] text-[18px] font-nunito  md:text-[24px] font-sans text-white mt-5 '>Cinemark Media is a dynamic digital marketing agency that combines
              creativity and strategic thinking to deliver innovative and effective solutions
              for your projects. With a focus on cutting-edge digital trends, Cinemark Media is dedicated
              to elevating your online presence and maximizing your impact in the digital landscape.</p>
          </div>
          <div className='mt-10'><img src="/img/logo.jpeg" alt="logo" height={400} width={400}></img></div>
        </div>


        {/* our services */}
        <div className='text-center mt-[100px]' >
          <h2 className='text-[32px] leading-relaxed font-sans font-bold font-sans  text-white' id='services'>Our Services</h2>
          <p className='font-sans text-white  text-[18px]  md:text-[24px] mt-5  font-nunito'>DG Avatar specialises in all types of branding solutions and primarily serves the Film and Entertainment sector. We provide the following services:</p>
          <div className='flex flex-wrap gap-[32px] mt-[40px] justify-center'>
            <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito  '>Social Media Management</p>
            </div>
            <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito '>Social Media Management</p>
            </div>
            <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito '>Social Media Management</p>
            </div>
            <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito '>Social Media Management</p>
            </div>
            <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px] shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito '>Social Media Management</p>
            </div>
            <div className='flex flex-col items-center  bg-[#e6f9ff] rounded-[30px] p-[15px]shadow-md transition duration-300 ease-in-out transform hover:scale-105'><img src="https://dgavatar.in/wp-content/uploads/2022/10/Social-Media-300x300.png" alt="logo" height={300} width={300}></img>
              <p className='font-sans text-gray-700 font-nunito '>Social Media Management</p>
            </div>
          </div>
        </div>
        {/* work done by us */}

        <div className='text-center mt-[100px]' id='work' >
          <h3 className=' text-center mt-[100px] text-[32px] leading-relaxed font-sans font-bold text-white font-sans' id='contact'
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
          <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
        <div className='bg-white h-1'></div>
        <div className="p-[20px] flex justify-between flex-col md:flex-col lg:flex-row items-center">
          <img src="/img/logo.jpeg" alt='company_logo_footer' height={200} width={200}></img>
          <div><ul className='flex flex-col md:flex-col lg:flex-row text-center mt-3'>
            <li className='mx-2  mt-5 lg:mt-3 '><a className='text-white text-[18px]  md:text-[24px] ' href="">Home</a></li>
            <li className='mx-2 mt-5 lg:mt-3 '><a className='text-white text-[18px]  md:text-[24px] ' href="">About Us</a></li>
            <li className='mx-2 mt-5  lg:mt-3'><a className='text-white text-[18px]  md:text-[24px] ' href="">Services</a></li>
            <li className='mx-2 mt-5 lg:mt-3'><a className='text-white text-[18px]  md:text-[24px] ' href="">Work Done By Us</a></li>
            <li className='mx-2 mt-5  lg:mt-3'><a className='text-white text-[18px]  md:text-[24px] ' href="">Contact</a></li>
          </ul>
            {/* <ul className='flex'>
        <li className='mx-2 text-red'><a href="">Home</a></li>
        <li className='mx-2 '><a href="">About Us</a></li>
      </ul> */}
          </div>
          <div>
            <ul className='flex  md:mt-10 mt-5'>
              <li className='mx-1 text-red'><a href=""><img src="img/insta.png" alt="" height={70} width={70} /></a></li>
              <li className='mx-1 text-red'><a href=""><img src="img/fb.png" alt="" height={70} width={70} /></a></li>
              <li className='mx-1 text-red'><a href=""><img src="img/what.png" alt="" height={70} width={70} /></a></li>
              <li className='mx-1 text-red'><a href=""><img src="img/insta.png" alt="" height={70} width={70} /></a></li>
              <li className='mx-1 text-red'><a href=""><img src="img/fb.png" alt="" height={70} width={70} /></a></li>
            </ul>
            <p className='font-sans text-gray-600 mt-[10px] max-w-[300px] text-center mt-7 '>Juhu Tara Rd, Uditi Tarang Housing Colony, Juhu Tara, Juhu, Mumbai, Maharashtra 400049, India</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
