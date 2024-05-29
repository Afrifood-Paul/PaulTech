import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import codeImg from "../assets/code.jpg";
import { workExperience } from "../constants";
import { motion } from "framer-motion";
//import { skills } from "../constants";

const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-gray-950 pb-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center text-white pt-10 mt-2 mb-10 tracking-wide"
      >
        Work{" "}
        <span className="bg-gradient-to-r from-blue-500 to-gray-300 text-transparent bg-clip-text">
          Experi
        </span>
        ence
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.0 }}
          className="p-2 w-full lg:w-1/2"
        >
          <img src={codeImg} alt="Code" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.0 }}
          className="lg:pt-12 w-full lg:w-1/2 text-gray-300"
        >
          {workExperience.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-white mx-6 bg-gray-800 p-2 justify-center items-center w-7 h-7 rounded-full">
                <IoTimeOutline />
              </div>
              <div>
                <h5 className="mt-1 xl:mb-2 text-xl">{item.title}</h5>
                <p className="text-neutral-400 w-[90%] text-md pb-2">{item.description}</p>
                <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.3 }}
                 className="text-sm">{item.technologies}</motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
