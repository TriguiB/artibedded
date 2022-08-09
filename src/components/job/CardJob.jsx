import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import "./CardJob.css";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
const CardJob = () => {
  return (
    <div className="cardJob">
      <div className="header">
        <p>Poste #2 : Ingénieur de qualité (Web / Mobile) </p>
      </div>
      <div className="icons-job">
        <div className="item-text">
          <div className="icon">
            <PinDropOutlinedIcon />
          </div>
          <p>aaaaaaaaaaaa</p>
        </div>
        <div className="item-text">
          <div className="icon">
            <ArticleOutlinedIcon />
          </div>
          <p>aaaaaaaaaa</p>
        </div>
        <div className="item-text">
          <div className="icon">
            <WorkOutlineOutlinedIcon />
          </div>
          <p>aaaaaaaaaa</p>
        </div>
        <div className="item-text">
          <div className="icon">
            <WorkspacePremiumOutlinedIcon />
          </div>
          <p>CIVP/CDD/CDI</p>
        </div>
      </div>
      <div className="button-post">
        <a className="item-post-button" >Postuler</a>
      </div>
    </div>
  );
};

export default CardJob;
