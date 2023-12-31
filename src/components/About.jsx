import React from 'react';
import sumitsagar from '../Assets/sumitsagar.png'

const About = () => {
  return (

    <div name='About' className='flex justify-center h-screen  w-full bg-gradient-to-b from-gray-600  text-white to-black sm:px-1'  >
      <div className='max-w-screen-lg flex flex-col items-center justify-center'>

      <div className='  font-headings text-[40px]'>
        <p>
          About
        </p>
      </div>
      <div className='flex flex-col  items-center  sm:flex-row'>
        <div className='w-2/6 '> <img src={sumitsagar} alt=""  /> </div>
        <div className='w-4/6 '>
          <p>Frontend Developer with approx 2 years of experience at Growstairs Technology Limited. Proficient in HTML, CSS, JavaScript, and responsive design. Demonstrated expertise in developing visually appealing and user-friendly interfaces. Skilled in collaborating with cross-functional teams to translate design concepts into functional websites. Committed to staying updated with the latest industry trends and best practices.
          </p>
          <br />
          <p className='hidden md:flex'> Collaborating with designers and backend developers to ensure seamless integration of frontend and backend components. Optimizing web applications for maximum speed and scalability. Ensuring cross-browser compatibility and responsive design for a consistent user experience across devices. Staying up-to-date with emerging frontend technologies and best practices to continually enhance development processes. </p>
          <p className='md:hidden'> Collaborating with designers and backend developers to ensure seamless integration of frontend and backend components. Optimizing web applications for maximum .......</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
