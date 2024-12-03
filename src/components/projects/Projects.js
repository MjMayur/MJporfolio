import React, { useRef, useState, useEffect } from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Once visible, it stays true
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
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)", // smooth transition for upward movement
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // transition for both opacity and transform
      }}
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Bulk Calendar"
          des="This Project involves managing and sending bulk emails efficiently. I designed the user interface for this project, creating a streamlined experience for both end users and administrators."
          src={projectOne}
        />
        <ProjectsCard
          title="Rubaru E-Comers App"
          des="In this Project, my role involved building a user-friendly, interactive admin dashboard tailored to efficiently manage the platform's products, orders, and customer interactions."
          src={projectTwo}
        />
        <ProjectsCard
          title="Core Organization management WebApp"
          des="In this project, I developed a comprehensive platform to manage organizational information, including creating and publishing job postings and handling multiple user logins."
          src={projectThree}
        />
        <ProjectsCard
          title="D2D Web App"
          des="In this Project, my role involved designing a user-friendly, responsive admin panel that allows efficient complaint tracking and resolution, tailored specifically to meet the needs of the platform’s administrators."
          src={projectThree}
        />
        <ProjectsCard
          title="Lavilas Media"
          des="In it, I managed the admin interface, allowing users to add and edit. My role involved designing a straightforward, responsive UI that makes it easy for administrators to update villa details."
          src={projectOne}
        />
        <ProjectsCard
          title="Food Delivery App"
          des="Created during my Udemy course, I developed a user-friendly interface featuring a list of food items that users can add to their cart. The app dynamically calculates the total bill."
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
