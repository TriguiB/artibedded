import React from "react";
import CardJob from "../components/job/CardJob";
import "./Jobs.css";
import axios from "axios";
import {useState, useEffect} from "react";
import {Grid} from "@mui/material";
import ReactPlayer from "react-player";
import Video from "../assets/recrutement.mp4";
import Footer from "../components/layout/Footer";
const Jobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/jobs")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      
        
     
      <Grid container spacing={5} style={{justifyContent: "center", marginBottom:"5%", marginTop:"3%"}}>
      <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        {data.map((job) => (
          <Grid item md={5} xs={12} textAlign="center">
            <CardJob key={job._id} job={job} />
          </Grid>
        ))}
      </Grid>
      <div style={{position:'relative', bottom:"0", right:"0", left:"0"}}><Footer/></div>
      
    </div>
  );
};

export default Jobs;
