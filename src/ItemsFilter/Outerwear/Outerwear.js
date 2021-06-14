import React, { useState, useEffect, useRef } from "react"
import "./Outerwear.css";
import firebase from "../../Firebase"
import { Link } from "react-router-dom";


export const DEVICE_ROUTE = "/product"
const Outerwear = () => {

    const db = firebase.firestore();
    const [items, setItems] = useState([])



    const getData = async () => {
        try {
            
            const { docs } = await firebase.firestore().collection("items")
                .where("type", "==", "outerwear")
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
                    {items.map((el, i) => 
                        <Link exact="/" to={DEVICE_ROUTE + "/" + el.name + "/" + el.price}>
                            <div className="card">
                            <div className="item_img">
                                <img className="img_size" alt="bottle opener" src={el.img}></img>
                            </div>
                            <div className="item_name">{el.name}</div>
                            <div className="item_cost">{el.price}</div>
                        </div>
                        </Link>
                    )}
                </div>
            </div>
        </>

    )
};

export default Outerwear;