import React from "react"
import './Contact.css';

const Contact = () => {



    return (
        <div className="main_content-contact">
            <div className="wrapper_contacts">
                <h1>CONTACT US</h1>
                <div className="site">HQ@MXDVS.CO</div>
                <div className="wrapper_inputs">
                    <div className="contact_inputs">
                        <input type="EMAIL" placeholder="NAME"></input>
                        <input type="text" placeholder="EMAIL"></input>
                        <input type="text" placeholder="PHONE NUMBER"></input>
                    </div>
                </div>
                <div>
                    <textarea placeholder="MESSAGE" className="textarea_contact" rows="6"></textarea>
                </div>
                <button className="contact_button">SEND</button>
            </div>

        </div>

    );



};


export default Contact;