import React from "react";
//motion
import { motion } from "framer-motion";
import user2 from "../assets/profile-pictures/user2.jpg";
// //variants
// import { fadeIn } from "./Variants";

const HeroSection = () => {
  const imgLink = [
    { img: user2 },
  ];

  return (
    <div className="flex flex-col items-center pb-5 pt-24 lg:pt-40 bg-gradient-to-r from-gray-950 to-blue-950">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide text-gray-400"
      >
        Hey,I'm{" "}
        <span className="bg-gradient-to-r from-blue-900 to-indigo-300 text-transparent bg-clip-text">
          Adebayo Opeyemi Paul
        </span>
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-gray-400 mt-10 text-lg max-w-4xl"
      >
        "A passionate front-end developer crafting seamless user experiences
        with cutting-edge technologies. Expert in HTML, CSS, JavaScript, and
        modern frameworks like Bootstrap,TailwindCSS and React. Dedicated to
        responsive design, ensuring your site looks stunning on any device.
        Adept at collaborating with cross-functional teams to bring creative
        visions to life. Ready to turn your digital ideas into reality with
        clean, efficient code."
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <a
          href="https://heritagecapitals.com.ng/"
          className="py-3 px-4 rounded-md border hover:border-purple-800 text-gray-300"
        >
          Live Demo
        </a>
      </motion.div>
      <div className="mt-10">
        {imgLink.map((item, index) => (
         <a href="https://heritagecapitals.com.ng/"  key={index}>
           <img src={item.img} />
         </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
