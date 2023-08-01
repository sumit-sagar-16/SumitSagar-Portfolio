import React from "react";
import BootstrapLogo from '../Assets/BootstrapLogo.png';
import cssIcon from '../Assets/cssIcon.png';
import github from '../Assets/github.png';
import htmlIcon from '../Assets/htmlIcon.png';
import JavaScript from '../Assets/JavaScript.png';
import tailwindIcon from '../Assets/tailwindIcon.png';
import Wordpress from '../Assets/Wordpress.png';
import science from '../Assets/science.png';


const Experience = () => {

    const experienceTile =[

        {
            id: 1,
            src: htmlIcon,
            title:'HTML',
            style: 'hover:shadow-orange-500 hover:text-orange-500 hover:font-bold'
        },
        {
            id: 2,
            src: cssIcon,
            title:'CSS',
            style: ' hover:shadow-blue-500 hover:text-blue-500 hover:font-bold'
        },
        {
            id: 3,
            src: JavaScript,
            title:'JS',
            style: ' hover:shadow-yellow-500 hover:text-yellow-500 hover:font-bold'
        },
        {
            id: 4,
            src: Wordpress,
            title:' Wordpress',
            style: ' hover:shadow-[#00779c] hover:text-[#00779c] hover:font-bold'
        },
        {
            id: 5,
            src: science,
            title:'React',
            style: ' hover:shadow-[#01edd2] hover:text-[#01edd2] hover:font-bold'
        },
        {
            id: 6,
            src: tailwindIcon,
            title:'Tailwind CSS',
            style: ' hover:shadow-[#1ea3bb] hover:text-[#1ea3bb] hover:font-bold'
        },
        {
            id: 7,
            src: BootstrapLogo,
            title:'Bootstrap',
            style: ' hover:shadow-[#8e13ff] hover:text-[#8e13ff] hover:font-bold'
        },
        {
            id: 8,
            src: github,
            title:'Git Hub',
            style: ' hover:shadow-[black] hover:text-[black] hover:font-bold'
        }
    ]

  return (
    <div name='Experience' className="w-full h-screen bg-gradient-to-b  from-gray-600 to-black text-white">
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="flex flex-col items-center">
          <p className='text-4xl font-bold font-headings '>Experience</p>
          <p className='py-6'>These are the technologies i have worked with -</p>
        </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 " >
        
        {experienceTile.map(({id,src,title,style})=>(

        <div key={id} className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
         
            <img src={src} alt="" className="w-16 mx-auto " />
            <p className="mt-4">{title} </p>
        
        </div>
        ))}
      
      </div>
      </div>
    </div>
  );
};

export default Experience;
