 import React from "react";
 import Hero from './Hero';
 import Team from './Team';
 import Navbar from '../common/Navbar';

 function AboutPage(){
    return(
        <div>
            <Navbar />
             <Hero></Hero>
             <Team></Team>
        </div>
      

    )
 }
 export default AboutPage;