import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {

  const links =[
    {
     id:1,
     child:(<>LinkedIn<FaLinkedin size={30}/></>),
     href:" https://www.linkedin.com/in/sumit-sagar-02a295141/",
     style: 'rounded-tr-md',
    },
    {
      id:2,
      child:(<>GitHub<FaGithub size={30}/></>),
      href:" https://github.com/sumit-sagar-16"
     },
     {
      id:3,
      child:(<>Mail<HiOutlineMail size={30}/></>),
      href: " mailto:sumitsagar16@gmail.com ",
      style: 'rounded-br-md',
     },
     
  ]

  return (
    <div className=' flex-col top-[35%] left-0 fixed hidden md:flex'>
        <ul>
          {links.map(({id,child,href,style})=>(

            <li key={id} className= {`bg-gray-500 hover:bg-blue-600 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-1px] duration-500 text-white ${style}` } >
                <a href={href} className='flex justify-between items-center w-full '
                target='_blank'
                rel='noreferrer'>
                    {child}
                </a>

            </li>
          ))}

        </ul>
    </div>
  );
};

export default SocialLinks