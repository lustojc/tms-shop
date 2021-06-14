import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import Itemlist from "../ItemList/Itemlist";
import Sweatshirts from "../../ItemsFilter/Sweatshirts/Sweatshirts";
import "./Content.css";
import Outerwear from "../../ItemsFilter/Outerwear/Outerwear";
import Pants from "../../ItemsFilter/Pants/Pants";
import Tshirts from "../../ItemsFilter/Tshirts/Tshirts";
import Femme, { DEVICE_ROUTE } from "../../ItemsFilter/Femme/Femme";
import Hats from "../../ItemsFilter/Hats/Hats";
import Masks from "../../ItemsFilter/Masks/Masks";
import Jewelry from "../../ItemsFilter/Jewelry/Jewelry";
import Accessories from "../../ItemsFilter/Accessories/Accessories";
import Interior from "../../ItemsFilter/Interior/Interior";
import firebase from "../../Firebase"
import ItemData from "../../ItemsFilter/Femme/ItemData";




const Content = () => {
    const db = firebase.firestore();
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)




    
    const fetchCategoties = async () => {
        const response = db.collection("categories");
        const data = await response.get();
        data.docs.forEach(item => {
            setCategories([...categories, item.data()])
        })
    }

    useEffect(() => {
        fetchCategoties()
    }, [])

    // .filter((el) => el.type === "hat")


    // [selectedCAt, setSelectedCAt] = useState()

    // [].map(el => {
    //     buttons nClick={() => {setSelectedCAt(el)}}
    // })


    // someArray.filter(el => el.type === selectedCAt).map(el => {
    //     Card ...selectedCAt
    // })
    

    return (
        <>

            {categories.map((el, i) => {

                return <div className="dp_bl">
                    <div className="header_wrapper">
                        <main className="main_page">
                            <div className="wrapper">
                                <header className="section_header" >
                                    <ul className="collection_nav">
                                        <NavLink to="/collections/outerwear"><li>{el.OUTERWEAR}</li></NavLink>
                                        <NavLink to="/collections/sweatshirts"><li>{el.SWEATSHIRTS}</li></NavLink>
                                        <NavLink to="/collections/pants"><li>{el.PANTS}</li></NavLink>
                                        <NavLink to="/collections/t-shirt"><li>{el.SHIRT}</li></NavLink>
                                        <NavLink to="/collections/femme" ><li>{el.FEMME}</li></NavLink>
                                        <NavLink to="/collections/hats"><li>{el.HATS}</li></NavLink>
                                        <NavLink to="/collections/masks"><li>{el.MASKS}</li></NavLink>
                                        <NavLink to="/collections/jewelry"><li>{el.JEWELRY}</li></NavLink>
                                        <NavLink to="/collections/accessories"><li>{el.ACCESSORIES}</li></NavLink>
                                        <NavLink to="/collections/interior"><li>{el.INTERIOR}</li></NavLink>
                                        <li><a className="summer_sale">{el.SUMMER}</a></li>
                                        <li><a className="archive">{el.ARCHIVE}</a></li>
                                    </ul>
                                </header>
                                <div>
                                <Switch>
                                    <Route path="/collections/outerwear" component={Outerwear} />
                                    <Route path="/collections/sweatshirts" component={Sweatshirts} />
                                    <Route path="/collections/pants" component={Pants} />
                                    <Route path="/collections/t-shirt" component={Tshirts} />
                                    <Route path="/collections/femme"><Femme /></Route>
                                    <Route path="/collections/hats" component={Hats} />
                                    <Route path="/collections/masks" component={Masks} />
                                    <Route path="/collections/jewelry" component={Jewelry} />
                                    <Route path="/collections/accessories" component={Accessories} />
                                    <Route path="/collections/interior" component={Interior} />
                                    </Switch>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            })}



        </>
    );



};



export default Content;