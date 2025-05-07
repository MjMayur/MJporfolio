import React, { useState, useEffect, useRef } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [backEndSkillData, setBackEndSkillData] = useState(false);
  // const [experienceData, setExperienceData] = useState(false);
  // const [achievementData, setAchievementData] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillGroups = [
    {
      skills: [
        { name: "HTML", percent: "100%" },
        { name: "CSS", percent: "70%" },
        { name: "JavaScript", percent: "80%" },
        { name: "React Js", percent: "80%" },
        { name: "Redux", percent: "90%" },
      ],
    },
    {
      skills: [
        { name: "React Strap", percent: "70%" },
        { name: "Routing", percent: "75%" },
        { name: "Bootstrap", percent: "80%" },
        { name: "MUI Design", percent: "70%" },
        { name: "Design", percent: "95%" },
      ],
    },
  ];
  const backEndSkillGroups = [
    {
      skills: [
        { name: "Golang", percent: "70%" },
        { name: "gRPC Communication", percent: "70%" },
        { name: "ResAPI", percent: "80%" },
        { name: "Backend", percent: "80%" },
      ],
    },
    {
      skills: [
        { name: "Microservices Architecture", percent: "80%" },
        { name: "JWT / OAuth Authentication", percent: "75%" },
        { name: "PostgreSQL", percent: "60%" },
        { name: "Mysql", percent: "75%" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)", // smooth transition
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // transition for both opacity and transform
      }}
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3  xs:grid-cols-3 sm:grid-cols-3 xl:grid-cols-3 text-cardColor">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setBackEndSkillData(false);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi bg-cardColor text-black sm:text-sm md:text-md lg:text-xl`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setBackEndSkillData(false);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi bg-cardColor text-black sm:text-sm md:text-md lg:text-xl`}
          >
            Front-End Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setBackEndSkillData(true);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              backEndSkillData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi bg-cardColor text-black sm:text-sm md:text-md lg:text-xl`}
          >
            Back-End Skills
          </li>
        </ul>
      </div>
      {educationData && (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)", // smooth transition
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // transition for both opacity and transform
          }}
        >
          <Education />
        </div>
      )}
      {skillData && (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)", // smooth transition
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // transition for both opacity and transform
          }}
        >
          <Skills skillGroups={skillGroups} />
        </div>
      )}
      {backEndSkillData && (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)", // smooth transition
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // transition for both opacity and transform
          }}
        >
          <Skills skillGroups={backEndSkillGroups} />
        </div>
      )}
      {/* You can uncomment the sections below when needed */}
      {/* {achievementData && (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // smooth transition
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', // transition for both opacity and transform
          }}
        >
          <Achievement />
        </div>
      )}
      {experienceData && (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // smooth transition
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', // transition for both opacity and transform
          }}
        >
          <Experience />
        </div>
      )} */}
    </section>
  );
};

export default Resume;
