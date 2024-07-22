import React from "react";
import "./Experience.css";
import Header from "../header/Header";
import ProjectContainer from "./project-container/ProjectContainer";
import Amazon from "../../assets/projectimages/Amazon.png"
import Dotkey from "../../assets/projectimages/Dot&key.png"
import Food from "../../assets/projectimages/Food.png"
import Paytm from "../../assets/projectimages/Paytm.png"
import Slider from "../../assets/projectimages/Slider.png"
import Todoapp from "../../assets/projectimages/Todoapp.png"

import github from "../../assets/images/github.jpg"
import projectlink from "../../assets/images/projectlink.jpg"
const Experience = () => {
  const allProjects = [
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Amazon,
      github:github,
      projectlink:projectlink,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Dotkey,
      github:github,
      projectlink:projectlink,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Food,
      github:github,
      projectlink:projectlink,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Paytm,
      github:github,
      projectlink:projectlink,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Slider,
      github:github,
      projectlink:projectlink,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Todoapp,
      github:github,
      projectlink:projectlink,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    }
  ];
  return (
    <section className="experience" id="projects">
      <Header header={"Projects"} />
      <article className="flex-center-center">
        {allProjects.map((project) => (
          <ProjectContainer
            key={project.title}
            link={project.link}
            image={project.image}
            title={project.title}
            techs={project.techs}
            imageAlt={`${project.title} image`}
            projectlink={project.projectlink}
            github = {project.github}
            githubLink= {project.githubLink}
          />
        ))}
      </article>
    </section>
  );
};

export default Experience;
