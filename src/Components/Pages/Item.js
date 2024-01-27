import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import water from "../../assets/sofaa.svg"
import { useNavigate } from 'react-router-dom';
const Item = () => {
    const navigate = useNavigate();
    function clickHandler ()
    {
             navigate("/home")
    }
  return (
    <div className='flex flex-col justify-evenly w-[90vw] mx-auto gap-5 '>
        
      <div className='[10vh] mt-16'><IoArrowBackSharp className='text-[20px]'/><button onClick={clickHandler} className='w-[5vw] h-[5vh] ml-5 bg-transparent border-none  text-[20px] font-semibold  text-[#fff]'>Back</button></div>

      <div className='grid grid-cols-2 h-[50vh] text-[#000]'>
        <div className=' flex items-center ml-20'><img className="w-[25vw] rounded-xl" src={water}/></div>
        <div className='flex flex-col gap-20 mt-14 bg-[#fff] h-[35vh] rounded-xl'>
        <h1 className='ml-5'>Utensils</h1>
        <p className='ml-5'>Username</p>
        </div>

      </div>
      <div className='h-[30vh] ml-20 '>
           <h2>Desciption</h2>
           <p className=' mt-6'>kjdfj dbjkdsjkfd dsbfdssbfjdsa bhdbfdsb</p>
      </div>
    </div>
  )
}

export default Item
