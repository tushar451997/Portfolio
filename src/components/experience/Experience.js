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

const Experience = () => {
  const allProjects = [
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Amazon,
      githubLink:"https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://coruscating-treacle-2ca6f6.netlify.app/",
      image: Dotkey,
      githubLink:"https://github.com/tushar451997/Clone-of-dot-key.com",
      title: "Clone Of Dot&key.com",
      techs: ["HTML/HTML5", "CSS/CSS3", "Javascript"],
    },
    {
      link: "https://majestic-kitten-3d5f66.netlify.app/",
      image: Food,
      githubLink:"https://github.com/tushar451997/Food-webpage-clone",
      title: "Food.com Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://melodious-gaufre-22abb9.netlify.app/",
      image: Paytm,
      githubLink:"https://github.com/tushar451997/Paytm-clone",
      title: "Paytm Clone",
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://velvety-trifle-6c9175.netlify.app/",
      image: Slider,
      githubLink:"https://github.com/tushar451997/Imageslider",
      title: "Image slider/Carousel",
      techs: ["HTML/HTML5", "CSS/CSS3","Javascript"],
    },
    {
      link: "https://boisterous-rolypoly-389726.netlify.app/",
      image: Todoapp,
      githubLink:"https://github.com/tushar451997/Todo-Application",
      title: "Todo Application",
      techs: ["HTML/HTML5", "CSS/CSS3", "Javascript", "React Js", "Firebase"],
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
