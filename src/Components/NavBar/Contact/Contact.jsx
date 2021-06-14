import React, { useState } from "react"
import './Contact.css';
import firebase from "../../../Firebase"

const Contact = () => {

    const db = firebase.firestore();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection("contacts").add({
            name:name,
            email:email,
            number:number,
            message:message,
        })
        .then(()=>{
            alert("Message has been submitted!")
        })
        .catch(error =>{
            alert(error.message)
        })

        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
    }

    return (
        <div className="main_content-contact">
            <div className="wrapper_contacts">
            <form onSubmit={handleSubmit}>
                <h1>CONTACT US</h1>
                <div className="site">HQ@MXDVS.CO</div>
                <div className="wrapper_inputs">
                    <div className="contact_inputs">
                        <input type="text" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)}></input>
                        <input type="EMAIL" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <input type="text" placeholder="PHONE NUMBER" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <textarea placeholder="MESSAGE" className="textarea_contact" rows="6" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button className="contact_button">SEND</button>
                </form>
            </div>

        </div>

    );



};


export default Contact;