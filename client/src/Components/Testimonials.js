import React from 'react'
import "./Header.css";
import Girl1 from "./images/girl1.jpeg";
import Girl2 from "./images/girl2.jpg";

function Testimonials() {
    return (
        <div id= "Testimonials" className="wrapper">
            <h1 className="welcomepage">TESTIMONIALS </h1>
            <div className="flex">
                <img src={Girl1} alt="girl1" className="item1"/>
                <div className="item2">
                    <h4>Jackie T.</h4>
                    <p>Central Los Angeles</p>
                    <blockquote >First time here & I was pleasantly surprised!! The service was great & I felt very welcomed as I walked in! The space itself is very clean and big. Didn't catch the lady's name but she was excellent. She checked in with me after one brow was done to ensure I liked it. Very good price as well, only $8! Will be coming back for sure !! :)</blockquote>
                </div>
            </div>
            <div className="flex">
                <img src={Girl2} alt="girl2" className="item1"/>
                <div className="item2">
                    <h4>Lisa S.</h4>
                    <p>Central Los Angeles</p>
                    <blockquote >This little gem is in the middle of a rundown strip mall. Don't judge a book by it's cover. I tried this place in desperation because I needed a place close to my house. I'm so glad I did. This is now my go-to threading spot. I see Rita every time. Highly recommend.</blockquote>
                </div>
            </div>

            <a href="https://www.yelp.com/biz/anu-beauty-and-threading-studio-los-angeles-4" style={{textAlign:"center"}}>More reviews ... </a>
        </div>
    )
}

export default Testimonials
