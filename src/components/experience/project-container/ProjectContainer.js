import React from "react";
import "./ProjectContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectContainer = ({ link, image, imageAlt, title, techs, projectlink, github, githubLink }) => {
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
      
      <img src={projectlink} style={{ height: '25px', width: '25px' }}/>
    </a>
    <a
      href={githubLink}
      target={"_blank"}
      rel="noreferrer"

    >
      <img src={github} style={{ height: '30px', width: '30px' }}/>
    </a>
    </div>
    </div></>
  );
};

export default ProjectContainer;
