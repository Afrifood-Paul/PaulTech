import React from "react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-950 to-blue-950 mt-2 pb-5">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
        className="w-full flex flex-col justify-center items-center py-10"
      >
        <h3 className="text-xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-blue-700 to-gray-400 bg-clip-text text-transparent">
          My Projects
        </h3>
        <div className="text-center text-gray-400 p-2 mt-5 -mb-11 border-2 border-gray-500 rounded-lg hover:border-2 hover:border-gray-50">
          <a href="https://github.com/">Other Projects On Github</a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="w-full px-12 h-auto py-10 rounded-lg flex flex-col border-r-2 group">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[80%] overflow-hidden rounded-lg"
          >
            <a href="https://harmoniespringschools.com/">
              <img
                className="w-full h-60 object-cover group-hover:scale-110 duration-300"
                src={user1}
                alt=""
              />
            </a>
          </motion.div>
          <div className="mt-3 w-full flex justify-center items-center gap-2">
            <a
              href="https://harmoniespringschools.com/"
              className="text-sm lg:text-lg text-gray-300"
            >
              A School Landing Page
            </a>
            <div className="flex gap-2">
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-orange-500 duration-300 cursor-pointer"
              >
                {" "}
                <TbWorldWww />
              </span>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full text-center text-gray-400"
          >
            <p>
              Click on the image to view the live demo of the school website in
              the browser.
            </p>
          </motion.div>
        </div>

        <div className="w-full px-12 h-auto py-10 rounded-lg flex flex-col border-r-2 group">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[80%] overflow-hidden rounded-lg"
          >
            <a href="https://heritagecapitals.com.ng/">
              <img
                className="w-full h-60 object-cover group-hover:scale-110 duration-300"
                src={user2}
                alt=""
              />
            </a>
          </motion.div>
          <div className="mt-3 w-full flex justify-center items-center gap-2">
            <a
              href="https://heritagecapitals.com.ng/"
              className="text-sm lg:text-lg text-gray-300"
            >
              Heritage Web Application
            </a>
            <div className="flex gap-2">
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-orange-500 duration-300 cursor-pointer"
              >
                {" "}
                <TbWorldWww />
              </span>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full text-center text-gray-400"
          >
            <p>
              Click on the image to view the live demo of the website in the
              browser.
            </p>
          </motion.div>
        </div>
        <div className="w-full px-12 h-auto py-10 rounded-lg flex flex-col border-r-2 group">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[80%] overflow-hidden rounded-lg"
          >
            <a href="https://urbanstyleburrito.com/">
              <img
                className="w-full h-60 object-cover group-hover:scale-110 duration-300"
                src={user3}
                alt="https://harmoniespringschools.com/"
              />
            </a>
          </motion.div>
          <div className="mt-3 w-full flex justify-center items-center gap-2">
            <a
              href="https://urbanstyleburrito.com/"
              className="text-sm lg:text-lg text-gray-300"
            >
              Urban Burrito Application
            </a>
            <div className="flex gap-2">
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-orange-500 duration-300 cursor-pointer"
              >
                {" "}
                <TbWorldWww />
              </span>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="w-full text-center text-gray-400"
          >
            <p>
              Click on the image to view the live demo of the website in the
              browser.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
