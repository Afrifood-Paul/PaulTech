import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Sections } from "../constants";

const Footer = () => {
  return (
    <div className="w-full mt-2 bg-gradient-to-r from-blue-950 to-gray-950 text-gray-300 py-6 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-6 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        {Sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="py-1 text-gray-500 hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Productive Chats</p>
          <p className="py-4">
            The latest updates articles and resoursces sent to your inbox
          </p>
          <div className="flex gap-14 text-3xl">
            <FaGithub />
            <FaWhatsapp />
            <FaTelegram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div>
        <p className="py-4 text-gray-300 text-center">
            2024 PaulTech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
