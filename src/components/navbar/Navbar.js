import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose, MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-16 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] ">
      <div className="font-bold">Mayur Jadhav</div>
      <div>
        <ul className="hidden mdl:inline-flex items-center lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="pt-3 text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden  w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <div
          className={`fixed top-0 left-0 h-full w-[80%] bg-gray-900 p-4 z-50 transform transition-transform duration-500 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full relative">
            <ul className="flex flex-col gap-4 mt-3">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 w-full left-0">
              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/MjMayur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIconSmall  text-white">
                    <FaGithub />
                  </span>
                </a>
                <a
                  href="mailto:mjmayur909@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIconSmall  text-white">
                    <MdEmail />
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mayur-jadhav-03b3821b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIconSmall  text-white">
                    <FaLinkedinIn />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mayur-jadhav-03b3821b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bannerIconSmall text-white">
                    <FaDownload />
                  </span>
                </a>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
