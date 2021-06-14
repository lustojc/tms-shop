import React from "react"
import './Newsletter.css';

const Newsletter = () => {



    return (
        <div className="main_content-letter">
            <div className="wrapper_letter">
                <h1>MXDVS NEWSLETTER</h1>
                <div className="wrapper_inputs">
                    <div className="letter_inputs">
                        <input type="EMAIL" placeholder="EMAIL"></input>
                        <input type="text" placeholder="NAME"></input>
                        <input type="text" placeholder="SURNAME"></input>
                    </div>
                </div>
                <button className="letter_button">SUBSCRIBE</button>
            </div>
        </div>

    );



};


export default Newsletter;