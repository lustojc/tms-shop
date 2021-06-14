import React, { useState, useEffect, useRef } from "react"
import "./Tshirts.css";
import firebase from "../../Firebase"



const Tshirts = () => {

    const db = firebase.firestore();
    const [items, setItems] = useState([])



    const getData = async () => {
        try {
            
            const { docs } = await firebase.firestore().collection("items")
                .where("type", "==", "shirts")
                .get()

          setItems (docs.map(doc => ({ ...doc.data() })))
           

        } catch(e) {
            console.error(e)
        
        }
    }
   
    useEffect(()=>{
        getData()
    },[])
    

    return (
        
        <>
            <div className="container">
                <div className="card_wrapper">
                    {items.map((el, i) => {
                        return (<div className="card">
                            <div className="item_img">
                                <img className="img_size" alt="bottle opener" src={el.img}></img>
                            </div>
                            <div className="item_name">{el.name}</div>
                            <div className="item_cost">{el.price}</div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
};

export default Tshirts;