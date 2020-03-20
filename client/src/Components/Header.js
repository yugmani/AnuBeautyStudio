import React from 'react'
import "./Header.css";

import Amenities from "./Amenities";
import Testimonials from "./Testimonials";
import Contact from './Contact';
import Footer from "./Footer";

import { Link } from "react-router-dom";

function Header() {
    return (
       <>
        <div id = "Home" className="App-header">
            <div className='nav'>
               
                <Link to="/Amenities" className="">SERVICES</Link>
                <Link to="/Testimonials" className="">TESTIMONIALS</Link>
                <Link to="/Contact" className="">CONTACT </Link>
                
            </div>
            
      
                <Link to="/create" className="checkin">Check In </Link>
                
            <div className="welcomepage">
                <h1 style={{color:"navy"}}>ANU'S BEAUTY STUDIO</h1>
               
            </div>
        </div>
        <Amenities />
        <Testimonials />
        <Contact />
        <Footer />
       </>
    )
}

export default Header
