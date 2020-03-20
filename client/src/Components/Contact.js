import React from 'react'

function Contact() {
    return (
        <div id = "Contact" className="wrapper">
            
           <h1 className="welcomepage">CONTACT US </h1>
            <form action="mail to:yugmani@yahoo.com" method="POST" encType="text/plain">
                    {/* <label for="fullname">Name</label> */}
                    Name:<br />
                    <input type="text" name="name" placeholder="ex.John Smith" />
                    {/* <label for="mail">Email</label> */}
                    Email:<br />
                    <input type="email" name="email" placeholder="ex. example@mail.com" />
                    {/* <label for="message">Message</label> */}
                    Message:<br />
                    <textarea rows="4" name="message" cols="80" placeholder="Type your message!" />
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact
