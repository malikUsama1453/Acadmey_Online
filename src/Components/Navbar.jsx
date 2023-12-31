import React, {useState} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import Typed from 'react-typed';

const Navbar=()=>{
    const [nav , setnav]=useState(false)

    const handelnav=()=>{
        setnav(!nav);
    }
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ACADEMY 
        <Typed strings={['...']} typeSpeed={100} backSpeed={130} loop showCursor='none' /></h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>courses</li>
            <li className='p-4'>Library</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handelnav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ACADEMY
        <Typed strings={['...']} typeSpeed={100} backSpeed={130} loop showCursor='none'/></h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Courses</li>
            <li className='p-4 border-b border-gray-600'>Library</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
        </div>
    
    );
};
export default Navbar;
