import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav
      className="fixed  
    w-full top-0 left-0 z-50 py-5 backdrop-blur-lg border-b-4 border-white bg-gradient-to-r from-gray-950 to-blue-950"
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img src={logo} width={60} height={60} alt="paultech" /> */}
            <span className="text-xl tracking-tight text-gray-300">
              PaulTech
              <span className="font-bold text-4xl text-gray">.</span>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-6 justify-center items-center">
            <a
              href="#"
              className=" flex text-lg text-white items-center gap-1 bg-gradient-to-r from-blue-950 to-gray-800 py-2 px-3 rounded-md"
            >
              <FaWhatsapp />
              Whatsapp
            </a>
            <a
              href="#"
              className=" flex text-lg text-white items-center gap-1 bg-gradient-to-r from-blue-950 to-gray-800 py-2 px-3 rounded-md"
            >
              <SiTelegram /> Telegram
            </a>
          </div>

          {/* Mobile navbar responsive */}
          <div className="lg:hidden md:flex flex-col justify-end text-gray-300">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* display navigations on mobileDrawerOpen */}
        {mobileDrawerOpen && (
          <div className="flex flex-col justify-center items-center fixed z-20 text-white left-0 bg-gradient-to-r from-gray-950 to-blue-950 mx-2 h-[70vh] w-[95%] rounded-b-xl p-12">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center space-x-6 mt-6">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-gray-800 py-2 px-3 rounded-md"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-gray-800 py-2 px-3 rounded-md"
              >
                <SiTelegram />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
