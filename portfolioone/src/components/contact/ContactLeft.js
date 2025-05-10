import React from "react";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { bannerImg } from "../../assets/index";
import { MdEmail } from "react-icons/md";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-white from-[#1e2024] to-[#23272b] p-2 lgl:p-8 rounded-lg  flex flex-col  justify-center">
      <img
        className="w-full h-68 object-cover rounded-lg mb-2 bg-gray-200 "
        src={bannerImg}
        alt="contactImg"
      />
      <div className="flex flex-col ">
        <h3 className="text-3xl font-bold text-black">Mayur Jadhav</h3>
        <p className="text-lg font-normal text-gray">Full-Stack Developer</p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7776006286</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mjmayur909@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-5 ">
        <div className="flex gap-4 mt-10">
          <a
            href="https://github.com/MjMayur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon bg-cardColor">
              <FaGithub />
            </span>
          </a>
          <a
            href="mailto:mjmayur909@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon bg-cardColor">
              <MdEmail />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/mayur-jadhav-03b3821b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon  bg-cardColor">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1LMYAJSXKHnkovKhoKDBGn-vXJO4heCM1/view?usp=drive_link"
            title="Download Resume"
            target="_blank"
          >
            <span className="bannerIcon bg-cardColor">
              <FaDownload />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
