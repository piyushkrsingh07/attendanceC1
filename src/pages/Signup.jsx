import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const Signup = (props) => {

    const[FormData,setFormData]=useState({FirstName:"",LastName:"",email:"",password:"",confirmpassword:""})
    const[showPassword,setshowPassword]=useState(true)
    const[showPassword2,setshowPassword2]=useState(true)
    let setIsLoggedIn=props.setIsLoggedIn;

    const navigate=useNavigate();

    function submitHandler(event){
        event.preventDefault();
        if(FormData.password != FormData.confirmpassword)
        {
          toast.error("Password mismatch")
          return;
        }
        else{
         console.log(FormData)
        setIsLoggedIn(true);
        toast.success("Account Successfully Created")
        navigate("/dashboard")
        }

    }

    function changeHandler(e){
        const{name,value,type}=e.target 
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [name]:value
            }
        });
    }
  return (
    <div className='flex bg-black h-[700px]'>
        <div>
          <img src="https://ucarecdn.com/ba7721e5-2943-429b-892d-a6134ea133f6/-/preview/982x1000/" alt="" className='w-[800px] h-[550px]'/>
        </div>
      <div className='flex flex-col gap-y-5  pl-[40px] mt-[70px] bg-gray-500 pr-[20px] rounded-md h-[560px] mx-auto'>
      <form onSubmit={submitHandler} className='text-white'>
        <h1 className='text-white mt-1 font-bold ml-5 mb-4'>Create Your Account</h1>
         <label htmlFor="FirstName" >First Name<sup className='text-red-700'>*</sup></label>
         <br />
         <input 
         required
         type="text"
         name="FirstName" 
         id="FirstName"
         placeholder="Enter Your First Name"
         value={FormData.FirstName}
         onChange={changeHandler}
         pattern="[a-zA-Z]*"
          className='bg-black px-1 py-1 rounded-sm '
         />
         <br />
         <br />
         <label htmlFor="">Last Name<sup className='text-red-700'>*</sup></label>
         <br />
         <input
         required 
         type="text"
         name="LastName" 
         id="LastName"
         placeholder="Enter Your Last Name"
         value={FormData.LastName}
         onChange={changeHandler}
         pattern="[a-zA-Z]*"
        className='bg-black px-1 py-1 rounded-sm'
         />
         <br />
         <br />
         <label htmlFor="email">Email<sup className='text-red-700'>*</sup></label>
         <br />
           <input 
           required 
           type="email"
           placeholder="Enter your email id " 
           name="email"
           id="name"
           value={FormData.email}
           onChange={changeHandler}
           className='bg-black px-1 py-1 rounded-sm'/>
           <br />
           <br />
           <label htmlFor="password">Create Password<sup className='text-red-700'>*</sup></label>
           <br />
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
         
           <label htmlFor="confirmpassword">Confirm Password<sup className='text-red-700'>*</sup></label>
           <br />
           <div className='flex'>
           <input
           required 
           type={showPassword2?("text"):("password")} 
           placeholder="Confirm Your Password"
           id="confirmpassword"
           name="confirmpassword"
           value={FormData.confirmpassword}
           onChange={changeHandler}
            className='bg-black px-1 py-1 rounded-sm'
           />
             <span className='ml-1 mt-2' onClick={()=>setshowPassword2((prev)=>!prev)}>
            {showPassword2 ? (<div><FaEye /></div>):(<div><FaEyeSlash /> </div>)}
           </span>
           </div>
           <div className='flex flex-col gap-y-3 items-center mt-7 ml-[-10px]'>
           <button className='text-black bg-yellow-500 px-[42px]  py-1 rounded-3xl'>Create Account</button>
          
          <button className='bg-black w-[190px] pl-2 rounded-3xl py-1 '><span className='flex items-center  gap-3 pb-1'><FcGoogle className='mt-1'/>Sign Up with Google</span></button>
          </div>




      </form>
      </div>




    </div>
  )
}

export default Signup
