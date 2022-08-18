import "./Contact.css";
//import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Grid} from "@mui/material";
import React, {useState} from "react";
import {LoadingButton} from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

export default function Contact() {
  const [data, setData] = useState({object:"Stage"})
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const changeValue = (value) => {
    setValue(value);
    data.phone = value;
  };

  const handleChange = (e) => {
    console.log(data)
    setData({...data, [e.target.name]: e.target.value})
    
  }
  const OnSubmit = (e) => {
    e.preventDefault();
    setLoading((prev) => !prev);
    axios.post("http://localhost:3001/api/mailer/mailcontact", {
      ...data,
    }).then((res) => {
      console.log(res)
      setLoading((prev) => !prev);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your message has been sent',
      })
    }
    ).catch((err) => {
      console.log(err)
      setLoading((prev) => !prev);
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'Something went wrong!',
      })
    }
    )
    
  }
  return (
    <div className="App mt-5">
      <Container>
        <Grid  container spacing={3}>
          <Grid item xs={12} md={7}>
            <div className="form container">
              <form onSubmit={OnSubmit}>
                <Grid container spacing={1}>
                  {[
                    {nom:"Nom &Prenom", type: "text", required: true,name:"name"},
                   {nom: "Email", type: "email", required: true,name:"email"},
                   { nom:"Telephone", type: "tel", required: true,name:"phone"},
                   { nom:"Entreprise", type: "text", required: false,name:"entreprise"},
                    {nom:"Fonction", type: "text", required: false,name:"fonction"},
                  ].map((text) => (
                    
                    <Grid item xs={12} md={6}>
                      {text.type=='tel'?(
                        <><label htmlFor="exampleInputEmail1">{text.nom}</label>
                      <PhoneInput
                    defaultCountry="TN"
                    type={text.type}
                    name={text.nom}
                    onChange={changeValue}
                    value={value}
                    required={text.required}
                    id={text}
                    className="form-control"
                  /></>
                       ):
                      
                      
                      <div className="form-group" key={text.name}>
                        <label htmlFor="exampleInputEmail1">{text.nom}</label>
                        <input onChange={handleChange} name={text.name} type={text.type} required={text.required} className="form-control" id={text} />
                      </div>}
                      
                    </Grid>
                  ))}
                  <Grid item xs={12} md={6}>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Objet</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={handleChange}
                        name="object"
                      >
                        {["Stage", "Information", "Autre"].map(
                          (text) => (
                            <option key={text}>{text}</option>
                          )
                        )}
                      </select>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Example textarea
                      </label>
                      <textarea
                      name='message'
                      onChange={handleChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </Grid>
                </Grid>
                <LoadingButton
              style={{backgroundColor: "#a77bce"}}
              endIcon={<SendIcon />}
              color="primary"
              type="submit"
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Next
            </LoadingButton>
              </form>
             
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="side-information container">
              {
                //<LocalPhoneIcon/>
              }
              <p> Phone:</p>
              <p>(+216) 21 621 621</p>
              <p> address:</p>
              <p> Rte Tunis 11.5 Imm , Sfax, Tunisie</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
