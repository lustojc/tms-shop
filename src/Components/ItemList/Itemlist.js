import React, { useEffect, useState } from "react"
import { Context, device } from "../../index"
import "./Itemlist.css";
import firebase from "../../Firebase"



const Itemlist = () => {

    const [items, setItems] = useState([])



    const getData = async () => {
        try {
            
            const { docs } = await firebase.firestore().collection("items")
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
            { <div className="container">
                    <div className="card_wrapper">
                    {items.map((data, el) =>
                        <div className="card">
                            <div className="item_img">
                                <img className="img_size" alt="bottle opener" src={data.img}></img>
                            </div>
                            <div className="item_name">{data.name}</div>
                            <div className="item_cost">{data.price}</div>
                        </div>)}
                    </div>
                </div>}
        </>
    );



};



export default Itemlist;



