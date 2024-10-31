import React from 'react'
import {useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
const Login = (props) => {
    const[FormData,setFormData]=useState({username:"",password:"",email:""})
    const[showPassword,setshowPassword]=useState(true)

    let setIsLoggedIn=props.setIsLoggedIn;

    const navigate=useNavigate();

    function changeHandler(e){
        const{name,value,type}=e.target 
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [name]:value
            }
        });
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")

    }
  return (
  <div className='flex bg-black'> 

  
 
    

    {/* <h1>WELCOME TO YOUR ACCOUNT</h1> */}
    <div className='flex flex-col gap-y-5 ml-[110px] pl-[40px] mt-[50px] bg-gray-500 pr-[20px] rounded-md h-[440px] mx-auto ' >
    <h1 className='text-white mt-5 font-bold'>WELCOME TO YOUR ACCOUNT</h1>
      <form onSubmit={submitHandler} className='text-white'>
        <label htmlFor="username">Username<sup className='text-red-700'>*</sup></label>
          <input 
          required
          type="text"
          placeholder="Enter Your UserName"
          name="username"
          id="username"
          value={FormData.username}
           onChange={changeHandler}
           className='bg-black px-1 py-1 rounded-sm'
           /> 
           <br />
           <br />
           <label htmlFor="email">Email<sup className='text-red-700'>*</sup></label>
           <input  type="email"
           required
           placeholder="Enter your email id " 
           name="email"
           id="name"
           value={FormData.email}
           onChange={changeHandler}
           className=' bg-black px-1 py-1 rounded-sm'/>
           <br />
           <br />
           <label htmlFor="password">Password<sup className='text-red-700'>*</sup></label>
           <div className='flex'>
           <input
           required
            type={showPassword?("text"):("password")} 
           placeholder="Enter Your Password"
           id="password"
           name="password"
           value={FormData.password}
           onChange={changeHandler}
           className='bg-black px-1 py-1 rounded-sm'
           
           />
           <span className='ml-1 mt-2' onClick={()=>setshowPassword((prev)=>!prev)}>
            {showPassword ? (<div><FaEye /></div>):(<div><FaEyeSlash /> </div>)}
           </span>
           </div>
           <br />
          
           <button className='text-black bg-[#FFD700] px-[70px] rounded-3xl py-1'>Sign In</button>
           <br />
           <div className='ml-[80px]'>OR</div>
        
         
           <button className='bg-black w-[190px] pl-2 rounded-3xl py-1 '><span className='flex items-center  gap-3 pb-1'><FcGoogle className='mt-1'/>Sign in with Google</span></button>
           
  
      </form>
    </div>

    <div className='ml-[100px]'>
    <img src="https://ucarecdn.com/55cda5d6-223c-41b8-9876-c21bf4ef2b15/-/preview/648x656/" alt="" className='w-[1000px] h-[550px]' />
  </div>
 </div> 
  )
}

export default Login