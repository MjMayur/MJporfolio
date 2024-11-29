import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3:grid-cols-4 gap-6 xl:gap-20">
        <Card
          className="text-black"
          title="Web App Development"
          des="I have built responsive web applications that are live across multiple domains, showcasing my expertise in creating versatile and user-friendly interfaces. "
          icon={<AiFillAppstore />}
        />
        <Card
          title="Mobile Development"
          des="My projects in React Native demonstrate my capability to build mobile applications that align with modern standards, delivering functionality and visual appeal. With a blend of personal project experience and hands-on practice"
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="With nearly two years of experience, I have designed and implemented a wide range of user-friendly, responsive screens tailored to different user needs and design styles."
          icon={<SiAntdesign />}
        />
        <Card
          title="Backend Knowledge"
          des="
I have a foundational understanding of backend development and am actively expanding my skills in this area. My experience includes working with backend concepts to support frontend applications."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
