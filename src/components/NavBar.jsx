import React, { useState } from 'react'
import { FaBars ,FaTimes  } from "react-icons/fa";
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setnav] = useState(false);



  const links =[
    {
        id:1,
        link:'Home'
    },
    {
        id:2,
        link:'About'

    } ,   
    {
        id:3,
        link:'Portfolio'
    },    
    {
        id:4,
        link:'Experience'
    },
    {
        id:5,
        link:'Contact'
    },
   
  ]



  return (
    <div className='flex justify-between items-center bg-black w-full h-20 z-10 fixed px-4 text-white'>
    <div>
        <h1 className='text-white font-signature text-4xl'>Sumit Sagar</h1>
    </div>
    <ul className='hidden md:flex'>
        {
            links.map(({id,link})=>(
                <li  
                key={id}
                className='text-gray-400 px-4 cursor-pointer hover:scale-150 hover:text-blue-600 hover:font-bold duration-300'
                >
                   <Link to={link} smooth duration={500}>{link} </Link> 
                </li>
            ))
        }

       

    </ul>
    <div onClick={()=>setnav(!nav)} className='cursor-pointer md:hidden pr-4 z-10 text-gray-400'>
        {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
    </div>
   
    {nav &&(

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full md:hidden h-screen bg-gradient-to-b from-black to-gray-800'>
        {
            links.map(({id,link})=>(
                <li  
                key={id}
                className='text-gray-400 py-6 text-4xl cursor-pointer hover:scale-110 duration-200 hover:text-gray-200'
                >
                     <Link onClick={()=>setnav(!nav)} to={link} smooth duration={500}>{link} </Link>
                </li>
            ))
        }
        </ul>
        
     )}
    
</div>
  )
}

export default NavBar



