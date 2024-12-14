import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Next.js Portfolio",
    description:
      "A personal website to showcase my portfolio. Built using Next.js and Tailwind",
    image: "images/nextjs-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "localhost:3000",
  },
  {
    id: 2,
    title: "Guardian Insurance Agency Website",
    description:
      "An informational website for an independant insurance agency. Built using Django",
    image: "images/guardian-agency-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mplicinski/guardian-insurance-agency-website",
    previewUrl: "https://theguardianagencyllc.com/",
  },
  {
    id: 3,
    title: "Job Finder Capstone Project",
    description:
      "Team project where I contributed documentation, design, frontend development, binding, and a job matching algorithm",
    image: "images/placeholder-1920x1080.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mplicinski/Job-Website-Project",
    previewUrl: "https://github.com/mplicinski/Job-Website-Project",
  },
  {
    id: 4,
    title: "Dog Traing School Website",
    description: "A demo project for a dog training school. ",
    image: "images/placeholder-1920x1080.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mplicinski/dog_training_school_website",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <div id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
