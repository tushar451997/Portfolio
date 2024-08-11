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
import Foodstore from "../../assets/projectimages/Foodstore.png"
import Weather from "../../assets/projectimages/Weather.png"
import Dashboard from "../../assets/projectimages/Dashboard.png"

import { Card, CardMedia, CardContent, Typography, Box, Grid } from "@mui/material";

const Experience = () => {
  const allProjects = [
    {
      link: "https://dancing-begonia-29f160.netlify.app/",
      image: Foodstore,
      githubLink: "https://github.com/tushar451997/Food-App",
      title: "Food Store",
      des:'This project is about building an online E-commerce food web application showing the functionalities of an e-commerce food website like sorting & search food, add to cart, trending items etc.',
      techs: ["Reactjs","React-bootstrap","RestApi", "CSS/CSS3"],
    },
    {
      link: "https://dashing-douhua-434e84.netlify.app/",
      image: Weather,
      githubLink: "https://github.com/tushar451997/Weather-App",
      title: "Weather App",
      des:'In this weather app we can search weather of any city,there is two tabs one Your Weather And another is Search Weather.',
      techs: ["HTML/HTML5", "CSS/CSS3", "Javascript","RestApi"],
    },
    {
      link: "https://singular-sherbet-ddcb9b.netlify.app/",
      image: Dashboard,
      githubLink: "https://github.com/tushar451997/Assignment-By-FitPeo-Tech-Private-Limited",
      title: "Static Webpage",
      des:'In this project i have simpley show data by using d3js',
      techs: ["Reactjs","React-bootstrap","RestApi", "CSS/CSS3","D3js"],
    },
    {
      link: "https://remarkable-hotteok-ad976a.netlify.app/",
      image: Amazon,
      githubLink: "https://github.com/tushar451997/Amazon-Clone-Html-Css?tab=readme-ov-file",
      title: "Amazon Clone",
      des:'This project is about building an online E-commerce web application with homepage',
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://coruscating-treacle-2ca6f6.netlify.app/",
      image: Dotkey,
      githubLink: "https://github.com/tushar451997/Clone-of-dot-key.com",
      title: "Clone Of Dot&key.com",
      des:'This project is about building an online E-commerce web application with sidebar,dropdown of navbar and sliders and it is completely responsive etc',
      techs: ["HTML/HTML5", "CSS/CSS3", "Javascript"],
    },
    {
      link: "https://majestic-kitten-3d5f66.netlify.app/",
      image: Food,
      githubLink: "https://github.com/tushar451997/Food-webpage-clone",
      title: "Food.com Clone",
      des:'This project is about clone of homepage of food.com',
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://melodious-gaufre-22abb9.netlify.app/",
      image: Paytm,
      githubLink: "https://github.com/tushar451997/Paytm-clone",
      title: "Paytm Clone",
      des:'This project is clone of paytm',
      techs: ["HTML/HTML5", "CSS/CSS3"],
    },
    {
      link: "https://velvety-trifle-6c9175.netlify.app/",
      image: Slider,
      githubLink: "https://github.com/tushar451997/Imageslider",
      title: "Image slider/Carousel",
      des:'In this project the slider is auto as well as we can see images manually clicking on left and right arrow also there is number dots there we can see particular image clicking on that dot ',
      techs: ["HTML/HTML5", "CSS/CSS3", "Javascript"],
    },
    {
      link: "https://boisterous-rolypoly-389726.netlify.app/",
      image: Todoapp,
      githubLink: "https://github.com/tushar451997/Todo-Application",
      title: "Todo Application",
      des:'In this project i have perform all crud operation, in this we can add ,delete, and edit todos.',
      techs: ["HTML/HTML5", "CSS/CSS3", "Javascript", "React Js", "Firebase"],
    },
  ];

  return (
    <section className="experience" id="projects" style={{ width: "100%" }}>
      <Header header={"Projects"} />
      <article className="flex-center-center">
        <Grid container spacing={4}>
          {allProjects.map((project) => (
            <Grid item xs={12} sm={6} md={6} key={project.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 5,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  bgcolor: '#f1f1f1',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  },
                  animation: '$fadeIn 0.5s ease',
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ maxHeight: 250, objectFit: "cover", borderRadius: 5 }}
                />
<CardContent>
  <Typography gutterBottom variant="h6" component="h2" style={{ fontWeight: 600,textAlign:'center' }}>
    {project.title}
  </Typography>
  <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
    {project.des}
  </Typography>
  <Box sx={{ mb: 1, textAlign: 'center' }}>
    <Typography variant="body2" component="span" style={{ fontWeight: 'bold', color: 'red' }}>
      Techstack:
    </Typography>
    {project.techs.map((tech, index) => (
 <span key={tech} style={{ color: 'rgba(0, 0, 0, 0.6)',fontSize: '0.875rem' }}>
        {tech}
        {index !== project.techs.length - 1 && ', '}
      </span>
    ))}
  </Box>
  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
    <a
      href={project.link}
      target={"_blank"}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Typography variant="body1" component="div" style={{ color: "#1976d2" }}>
        <i class="fa-solid fa-display" style={{ fontSize: "28px" }}></i>
      </Typography>
    </a>
    <a
      href={project.githubLink}
      target={"_blank"}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Typography variant="body1" component="div" style={{ color: "#1976d2" }}>
        <i className="icon fa-brands fa-github"></i>
      </Typography>
    </a>
  </Box>
</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </article>
    </section>
  );
};

export default Experience;
