import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoHome } from "react-icons/io5";
const Navbar = (props) => {

    let IsLoggedIn=props.IsLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <nav className='relative flex justify-between space-x-3 bg-black h-[50px] mt-0 pl-2 pr-3 items-center w-full'>
      <div className='flex'>
      <NavLink to="/">
      <div>
      <img src="https://ucarecdn.com/b16da8b0-1d0b-48be-ac3f-5a8cd1ef772b/-/preview/1000x1000/" alt="Logo" className='w-[50px]' />
      </div>
      </NavLink>
    
      <NavLink to="/">
       <div className='text-white text-center ml-[10px]'><IoHome className='w-[30px] h-[50px]'/></div>
      </NavLink>
      </div>

   
  

       
     

      <div className='flex ml-5 mr-3 gap-3'>
        
        {!IsLoggedIn &&
        <NavLink to="/login">
            <button className='text-white bg-gray-500 px-2 py-1 rounded-sm border-hidden transition-all duration:200 hover:border-solid hover:border-white hover:border'>Login</button>
        </NavLink>
         }
       
        { !IsLoggedIn &&
        <NavLink to="/signup">
          <button className='text-white bg-gray-500 px-2 py-1 rounded-sm border-hidden transition-all duration:200 hover:border-solid hover:border-white hover:border'>SignUp</button>
        </NavLink>
        }

        { IsLoggedIn &&
        <NavLink to="/">
            <button onClick={()=>{
                setIsLoggedIn(false)
                toast.success("You are logged out");
                
            }} className='text-white bg-gray-500 px-2 py-1 rounded-sm border-hidden transition-all duration:200 hover:border-solid hover:border-white hover:border'>Logout</button>
        </NavLink>
        }







      </div>



       

     
    </nav>
  )
}

export default Navbar
