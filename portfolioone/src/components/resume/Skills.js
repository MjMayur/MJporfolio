import React from "react";
import { motion } from "framer-motion";

const Skills = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {props.skillGroups.map((group, i) => (
        <div className="w-full lgl:w-1/2" key={i}>
          <div className="mt-14 w-full flex flex-col gap-6">
            {group.skills.map((skill, index) => (
              <div className="overflow-x-hidden" key={index}>
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r from-black via-[#2100F2] to-designColor rounded-md relative`}
                    style={{ width: skill.percent }}
                  >
                    <span className="absolute -top-7 right-0">
                      {skill.percent}
                    </span>
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
