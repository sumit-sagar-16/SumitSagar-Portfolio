import React from "react";

const Contact = () => {
  return (
    <div name= 'Contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-500 p-4 text-white">
      <div className="flex  flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" flex flex-col items-center  pb-5">
          <p className=" text-4xl font- font-headings">Contact</p>
          <p>Submit the form below to get in touch with me :)</p>
        </div>
        <div className="flex justify-center items-center  ">
          <form   action="https://formspree.io/f/xqkvaree" method="POST" className="flex flex-col w-full md:w-1/2 ">
            <input 
                type="text" 
                name="name" 
                placeholder="Enter Your Name" 
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Enter Your Email Address" 
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea 
                name="message"  
                rows="8"
                placeholder="Enter Your Message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className=" text-white bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"> Let's Talk</button>



          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
