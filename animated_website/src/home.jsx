import React from "react";
import web from "../src/images/webs.jpg"
import { NavLink } from "react-router-dom";
import Common from "./common";
 const Home=()=>{
    return(<>
   <Common 
   name="Grow your Business with"
    imgsrc={web}
    visit="./service"
    text="Get Started"
   />
    </>)
 }
 export default Home;