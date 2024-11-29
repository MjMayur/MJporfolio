import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Frontend Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-textColor">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Mayur Jadhav.</span>
        </h1>
        <h2 className="text-4xl font-bold text-textColor">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-textColor font-bodyFont leading-6 tracking-wide">
          As a Frontend Developer with one and a half years of experience, I've
          mastered screen designing, creating user-friendly and visually
          appealing interfaces. I'm also building my backend skills and
          improving them over time.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-designColor font-bold uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
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
            {/* <a
              href="https://drive.google.com/file/d/1qLeGDnSnrEqOn_tQ8d5v9e6iSv6XpjAR/view?usp=drive_link"
              download="My_Resume_Mayur_Jadhav"
              target="_blank"
            >
              <span className="bannerIcon bg-cardColor">
                <FaFileDownload />
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
