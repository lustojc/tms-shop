import React, {useState} from "react"
import './Newsletter.css';
import firebase from "../../../Firebase"


const Newsletter = () => {


    const db = firebase.firestore();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [surname, setSurname] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection("subscribe").add({
            name:name,
            email:email,
            surname:surname,
        })
        .then(()=>{
            alert("Now you are subscriber!")
        })
        .catch(error =>{
            alert(error.message)
        })

        setName('')
        setEmail('')
        setSurname('')
    }

    return (
        <div className="main_content-letter">
            <div className="wrapper_letter">
            <form onSubmit={handleSubmit}>
                <h1>MXDVS NEWSLETTER</h1>
                <div className="wrapper_inputs">
                    <div className="letter_inputs">
                        <input type="EMAIL" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <input type="text" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)}></input>
                        <input type="text" placeholder="SURNAME" value={surname} onChange={(e)=>setSurname(e.target.value)}></input>
                        <button className="letter_button">SUBSCRIBE</button>
                    </div>
                </div>
                
                </form>
            </div>
        </div>

    );



};


export default Newsletter;