import React from "react";
import app from "../../../Firebase"
import "./Login.css"


const Home = () => {
  return (
    <>
      <h1>YOUR SHOP HISTORY:</h1>

      <div>empty</div>
      <button className="singout" onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;