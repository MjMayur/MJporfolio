import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Masters in Computer Application"
            subTitle="Savitribai Phule Pune University (2022 - 2024)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (2017 - 2020)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* part Two */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Handle Frontend - (2023 - Present)"
            result="USA"
            des="I have been working as a Frontend Developer at Scalent, where I specialize in designing responsive screens, managing routing, and integrating APIs. My work focuses on building interactive, user-friendly interfaces."
          />
          <ResumeCard
            title="Web Developer & Trainee"
            subTitle="Frontend Developer Trainee - (02/2023 - 05/2023)"
            result="MALAYSIA"
            des="I began as a trainee, where I deepened my skills in React through hands-on projects and completed a comprehensive React course on Udemy. This training period provided a strong foundation in frontend development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
