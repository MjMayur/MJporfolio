import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex ">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5  rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 bg-cardColor rounded-full  inline-flex duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-cardColor hover:bg-black duration-400 group-hover:text-white rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 transition-colors duration-1000">
        <div className="flex flex-col lgl:flex-row hover:text-white justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-sm mt-2">{subTitle}</p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium ">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
