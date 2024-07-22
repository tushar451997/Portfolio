import React from "react";
import "./ProjectContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectContainer = ({ link, image, title, techs, githubLink }) => {
  return (
  <>

    <div       className="project-container">
    <img src={image} style={{ height: '40vh', width: '50vw' }} alt="imageAlt" />


      <h3 className="title"> {title} </h3>
     
      <div className="flex-center-center techs-container">
      <h4>Technologies Used : </h4>
        {techs.map((tech) => (
          <span key={tech}> {tech} </span>
        ))}
      </div>
    <div style={{"display":"flex",justifyContent:"space-around"}}>
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"

    >
      <i class="fa-solid fa-display" style={{fontSize:"28px"}}></i>
    </a>
    <a
      href={githubLink}
      target={"_blank"}
      rel="noreferrer"

    >
      <i className="icon fa-brands fa-github"></i>
    </a>
    </div>
    </div></>
  );
};

export default ProjectContainer;
