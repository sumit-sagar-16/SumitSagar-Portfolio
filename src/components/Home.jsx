import React from "react";
import home_image from "../Assets/home_image.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black  to-gray-600 "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full p-5 md:flex-row ">
        <div>
          <h2 className="text-5xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 2 years of experience buildng and designing Front End.
            Developing and implementing user-friendly web interfaces using HTML
            , CSS , JavaScript , React.js , Tailwind.
          </p>
          <div>
            <button className="group text-white text-lg w-fit my-2 flex items-center justify-center pl-6 py-4 cursor-pointer rounded-md space-x-4 bg-gradient-to-r from-blue-700 via-blue-600">
              Download CV
              <span className=" group-hover:rotate-90 duration-300 px-6">
                <FaArrowRight size={21} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={home_image}
            alt="myImage"
            className=" mx-auto w-3/5 md:w-full z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
