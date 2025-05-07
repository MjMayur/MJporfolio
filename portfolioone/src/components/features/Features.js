import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import {
  FaMobile,
  FaGlobe,
  FaRegGrinTongue,
  FaRegEnvelopeOpen,
  FaRegFileCode,
  FaDatabase,
} from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3:grid-cols-4 gap-6 xl:gap-20">
        <Card
          title="Web App Development"
          des="I have built responsive web applications deployed across various domains, showcasing my ability to create clean, scalable, and user-focused interfaces."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Mobile Development"
          des="My experience with React Native includes developing mobile apps that meet modern UI/UX standards, balancing functionality with visual design through hands-on and project-based learning."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="With nearly two years of experience, I have crafted intuitive, responsive screens across multiple projects, ensuring user needs and design aesthetics are met efficiently."
          icon={<SiAntdesign />}
        />
        <Card
          title="Backend Knowledge"
          des="I have a strong foundational understanding of backend development and continue to grow in this area. I’ve worked with backend systems to support and extend frontend functionality."
          icon={<FaGlobe />}
        />
        <Card
          title="Backend Experience"
          des="I have solid hands-on experience building RESTful APIs with Golang, including API design, JWT authentication, and seamless integration with frontend applications in full-stack projects."
          icon={<FaRegFileCode />}
        />
        <Card
          title="Database Understanding"
          des="I’ve worked with PostgreSQL and MySQL for data modeling, writing efficient queries, and managing backend data flows. These skills contribute to robust and scalable application performance."
          icon={<FaDatabase />}
        />
      </div>
    </section>
  );
};

export default Features;
