import React from "react";
import Common from "./common";
import web from "../src/images/about.jpg"
 const About=()=>{
    return(<>
        <Common
            name='Welcome to About Page'
            imgsrc={web}
            visit='/contact'
            text='Contact Now'
        />
    </>)
 }
 export default About;