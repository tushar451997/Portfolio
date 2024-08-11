import React, { Fragment } from "react";
import "./About.css";
import Header from "../header/Header";
import personalImage from "../../assets/images/myphoto.jpg";
import TongadimeImage from "../../assets/images/Tongadivelogo.png";
import Typewriter from "typewriter-effect";
import abdoCV from "../../assets/pdf/Tushar_CV.pdf";
import SkillTab from "../Skills/Skill-item/SkillTab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const experience = [
    {
      companyImg:
      TongadimeImage,
      companyName: "Tongadive India Private Limited",
      jobTitle: "Junior full Stack developer - 1.4years ",
      startDate: "Mar, 2023",
      endDate: "Jun, 2024",
      companyCityLocation: "New Delhi",
      companyCountryLocation: "India",
      workingSite: "(Remote)",
      techStack: [
        "ReactJs",
        "Material UI",
        "Redux toolkit",
        "Redux",
        "NodeJs", 
        "NestJs",
        "TypeORM",
        "PostgreSQL"
      ],
    },
    {
      companyImg:
      TongadimeImage,
      companyName: "CatalystCode Technologies",
      jobTitle: "Reactjs Developer - 1.6years",
      startDate: "Aug, 2021",
      endDate: "Feb, 2023",
      companyCityLocation: "Mumbai",
      companyCountryLocation: "India",
      workingSite: "(Remote)",
      techStack: [
        "ReactJs",
        "Bootstrap",
        "Css",
        "Redux toolkit",
        "Redux"
      ],
    },
    {
      companyImg:
      TongadimeImage,
      companyName: "BVG Tech.",
      jobTitle: "Electrical Engineer - 1years",
      startDate: "Dec, 2019",
      endDate: "Dec, 2020",
      companyCityLocation: "Mumbai",
      companyCountryLocation: "India",
      workingSite: "Pune",
      techStack: [
       "Autocad","Plc Programming"
      ],
    }
  ];

  return (
    <section className="main-section" id="about">
      <Header header="About Me" />
      <article className="main-section-article">
        <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
          <h1>Hello, I'm Tushar Nehe </h1>
          <h2 style={{ marginLeft: "10px" }}>
            I'm a{" "}
            {
              <span style={{ color: "green" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Engineer",
                      "Backend Engineer",
                      "Full Stack Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            }{" "}
          </h2>
          <p>
            A self-motivated IT professional with huge knowledge and proficiency
            in HTML, CSS, JavaScript, ReactJs, NodeJs, Express, NestJs(Framework
            for NodeJs), MongoDB (Database), responsive web development and
            strong skills and ability in writing clean and efficient code,
            little experience with MySQL.
          </p>
          <a
            href={abdoCV}
            download={"Tushar_CV"}
            style={{
              borderRadius: "5px",
              alignSelf: "center",
              display: "block",
            }}
          >
            <SkillTab name={"Download My CV"} style={{ padding: "20px" }} />
          </a>
        </div>
        <LazyLoadImage
          effect="blur"
          width={"226px"}
          height="250px"
          src={personalImage}
          alt="Personal"
        />
      </article>
      <Header header={"Work Experience"} />
      <section
        className="main-section"
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        {experience.map((job, index) => {
          const {
            companyCityLocation,
            companyCountryLocation,
            companyImg,
            companyName,
            endDate,
            jobTitle,
            startDate,
            techStack,
            workingSite,
            brief,
          } = job;
          return (
            <Fragment key={companyName}>
              <article className="job-wrapper">
                <div className="company-img-wrapper">
                  <LazyLoadImage
                    className="company-img"
                    effect="blur"
                    width={"100px"}
                    height="100px"
                    src={companyImg}
                    alt={companyName}
                  />
                </div>

                <div>
                  <h2 className="">{companyName}</h2>
                  <p className="job-title bold">{jobTitle}</p>
                  <div className="job-content">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      color="brown"
                      style={{ marginRight: "2px" }}
                    />
                    <span>
                      {startDate} -- {endDate}
                    </span>{" "}
                    <br />
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="brown"
                      style={{ marginRight: "2px" }}
                    />
                    <span>
                      {companyCityLocation},{" "}
                      <span className="bold">{companyCountryLocation}</span>{" "}
                      {workingSite}
                    </span>
                    <br />
                    <span className="bold">Tech Stack:</span>{" "}
                    {techStack.map((stack, i) => (
                      <Fragment key={stack}>
                        {stack}
                        {i < techStack.length - 1 && <>, </>}
                      </Fragment>
                    ))}
                    {brief && (
                      <p>
                        <span className="bold">Brief: </span>
                        <span> {brief} </span>
                      </p>
                    )}
                  </div>
                </div>
              </article>
              {index < experience.length - 1 && (
                <div
                  style={{
                    width: "90%",
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "2px",
                    backgroundColor: "rgb(155 153 153)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              )}
            </Fragment>
          );
        })}
      </section>
    </section>
  );
};

export default About;
