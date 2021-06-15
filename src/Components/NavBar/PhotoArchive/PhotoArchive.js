import firebase from "../../../Firebase"
import './PhotoArchive.css';
import React, { useState, useEffect } from "react"

const PhotoArchive = () => {

    const [photos, setPhotos] = useState([])


    const getData = async () => {
        try {
            const { docs } = await firebase.firestore().collection("photos")
                .get()
            setPhotos(docs.map(doc => ({ ...doc.data() })))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container_img">
            <div className="card_wrapper">
                {photos.map((el, i) =>
                    <div className="card_img">
                        <div className="item_img">
                            <img className="img_size-photo" alt="bottle opener" src={el.img}></img>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );



};


export default PhotoArchive;