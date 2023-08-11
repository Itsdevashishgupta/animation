import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./footer";
const App=()=>{
    return(<>
    <Navbar/>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/service" Component={Service}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer/></>)
}
export default App;