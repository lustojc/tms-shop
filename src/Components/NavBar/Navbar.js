import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";




const Navbar = () => {


    return (
        <div className="navbar">
            <div className="navbar_wrapper" >
                <div className="wrapper_img">
                        <NavLink to="/collections/product"><div className="navbar_img"></div></NavLink>
                </div>
                <div className="site-nav_link">
                    <NavLink to="/collections/product">PRODUCTS</NavLink>
                    <NavLink to="/pages/photo-archive">PHOTO ARCHIVE</NavLink>
                    <NavLink to="/pages/newsletter">NEWSLETTER</NavLink>
                    <NavLink to="/pages/contact">CONTACT</NavLink>
                    <NavLink to="/pages/f-a-q">F.A.Q.</NavLink>
                    <NavLink to="/pages/terms">TERMS</NavLink>
                </div>
                <div className="medium-nav_link">
                    <NavLink to="/login">LOG IN</NavLink>
                    <NavLink to="/register">CREATE ACCOUNT</NavLink>
                    <NavLink to="/pages/cart">CART</NavLink>
                </div>
                <div className="flag">
                    <a rel="noreferrer" href="https://www.google.be/maps/place/Belgium/@50.4795318,2.2235539,7z/data=!3m1!4b1!4m5!3m4!1s0x47c17d64edf39797:0x47ebf2b439e60ff2!8m2!3d50.503887!4d4.469936" target="_blank">
                        <div className="flag-color black"></div>
                        <div className="flag-color yellow"></div>
                        <div className="flag-color red"></div>
                    </a>
                </div>
                <div className="author">
                    <a href="https://www.instagram.com/max.reynders/" rel="noreferrer" target="_blank">BY MAX REYNDERS</a>
                </div>
            </div>
        </div>

    );



};



export default Navbar;