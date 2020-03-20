import React from 'react'
import "./Header.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialmedias">
                <h4>Follow Us</h4>
                <a href="https://www.instagram/in/ss"><i className="fab fa-instagram-square"></i></a>
                <a href="https://www.twitteer/ss" ><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook/dd" ><i className="fab fa-facebook-f"></i></a>
            </div>
            <div className="socialmedias">
                <h4>Beauticians</h4>
                <div >
                    <p >Anu G.</p>
                    <p>Aarati T.</p>
                    <p>Maria S.</p>
                </div>
            </div>
            
            <address className="socialmedias">
                    <h4>Walk to:</h4><br />
                    1651 S. Western Ave<br />
                    Los Angeles, CA 9006 <br />
                    <br />
                    <h4>Call us:</h4><br />
                    <i className="fas fa-phone-square-alt">(323) 870-5100</i> 
            </address>
            <div className="socialmedias">
                <h4>Business Hours</h4>
                <p>Mon - Sat : 10:00am - 7:00pm</p>
                <p>Sunday: 11am - 6:30pm</p>
                <br />
                <small>Designed & Built by Yug Gurung</small>
            </div>

            
        </div>
    )
}

export default Footer
