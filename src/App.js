import React, {useEffect, useState} from "react"
import './App.css';
import Navbar from './Components/NavBar/Navbar.js'
import Content from './Components/Content/Content.js'
import Newsletter from "./Components/NavBar/Newsletter/Newsletter"
import Contact from "./Components/NavBar/Contact/Contact"
import Faq from "./Components/NavBar/FAQ/Faq"
import Terms from "./Components/NavBar/Terms/Terms"
import Login from "./Components/NavBar/LogIn/Login"
import Register from "./Components/NavBar/Register/Register"
import Cart from "./Components/NavBar/Cart/Cart"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Itemlist from "./Components/ItemList/Itemlist";
import PhotoArchive from "./Components/NavBar/PhotoArchive/PhotoArchive";
import SignUp from "./Components/NavBar/LogIn/SignUp";
import Home from "./Components/NavBar/LogIn/Home";
import { DEVICE_ROUTE } from "./ItemsFilter/Femme/Femme";
import ItemData from "./ItemsFilter/Femme/ItemData";
import ItemsContext from "./Context";
import firebase from "./Firebase"




function App() {

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
    <BrowserRouter>
      <>
        <div>
          <div >
            <div >
              <Navbar/>
            </div>
          </div>
          <div className="hed">
            <Route path="/collections" component={Content} />
            <Route path="/collections/product" component={Itemlist} />
            <Route path="/pages/photo-archive" component={PhotoArchive} />
            <Route path="/pages/newsletter" component={Newsletter} />
            <Route path="/pages/contact" component={Contact} />
            <Route path="/pages/f-a-q" component={Faq} />
            <Route path="/pages/terms" component={Terms} />
            <Route path="/login"><Login/></Route>
            <Route path="/register" component={SignUp} />
            <Route path="/pages/cart" component={Cart} />
            {/* <Route path={DEVICE_ROUTE + "/" + ":id"} component={ItemData} /> */}
            <div>
            <Route path="/product/:name/:price"><ItemData/></Route>
            </div>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
