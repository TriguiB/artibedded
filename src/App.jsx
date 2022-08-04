import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Service from "./pages/Service";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div style={{margin:'0'}}>
   <Layout>
   
    
      <Routes >
      
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Jobs/>} />
        <Route path="/services" element={<Service/>} />
      </Routes>
    </Layout>
   

    </div>
  );
}

export default App;
