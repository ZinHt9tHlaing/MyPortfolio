import React from "react";
import { ProjectCard } from "./Helper";

const Projects = () => {
  return (
    <div className=" pt-20 pb-12 bg-gray-900">
      <div className=" text-center">
        <p className="heading-mini">Recent Works</p>
        <h1 className="heading-primary">
          My Best{" "}
          <span className="text-yellow-300 font-secondary">Projects</span>
        </h1>
      </div>
      {/* Project Card */}
      <ProjectCard
        title="E-commerce Website"
        tech1="Tailwind"
        tech2="NextJS"
        tech3="TypeScript"
        image={"/images/p1.png"}
      />
      <ProjectCard
        title="Portfolio Website"
        tech1="Tailwind"
        tech2="NextJS"
        tech3="TypeScript"
        image={"/images/p2.png"}
      />
      <ProjectCard
        title="Food Delivery Website"
        tech1="RTK"
        tech2="NextJS"
        tech3="TypeScript"
        image={"/images/p3.png"}
      />
      <ProjectCard
        title="Movie Website"
        tech1="React"
        tech2="Router"
        tech3="Tailwind"
        image={"/images/p4.png"}
      />
    </div>
  );
};

export default Projects;
