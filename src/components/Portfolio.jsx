import React from 'react';
import DemoTile from '../Assets/DemoTile.png'

const Portfolio = () => {

  const portfolios=[
    {
      id: 1,
      src: DemoTile
    },
    {
      id: 2,
      src: DemoTile
    },
    {
      id: 3,
      src: DemoTile,
      
    }
  ]



  return (
    <div name='Portfolio' className=' justify-center w-full md:h-screen bg-gradient-to-b from-black to-gray-600 text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
        <div className='flex flex-col items-center pb-8'>
          <p className='text-4xl font-bold font-headings'>Portfolio</p>
          <p className='py-6'>Check out some of my work write here :) </p>
        </div>

        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px1 '>
       { portfolios.map(({id,src}) => (

          <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
            <img src = {src} alt='DemoPicture' className=' duration-200 hover:scale-110 '/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Code</button>
            </div>
          </div>
        )) }

        </div>
      </div>
    </div>
  )
}

export default Portfolio