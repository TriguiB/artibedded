import {Grid} from "@mui/material";
import React from "react";
import CardAbout from "../components/cardAbout/CardAbout";
import {abouts} from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="left-about-header">
         
          <div className="text-left-about">
          
            <p className="title-about"> WHO ARE WE ?</p>
            <p className="text-description-about">
              We Are Highly Skilled Group Of Engineers And Technicians With
              Different Backgrounds And Having The Same Purpose !
            </p>
            <h3>”Give You The Finest Solution“</h3>{" "}
          </div>
        </div>
        <div className="right-about-header"></div>
        
      </div>
    </div>
  );
};

export default About;
