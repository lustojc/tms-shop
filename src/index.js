import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shop from "./Shop"
import ItemsContext from "./Context"

function Main() {
  const [items, setItems] = useState([])
  return (
<React.StrictMode>
    <ItemsContext.Provider value={{ items, setItems}}>
      <App />
    </ItemsContext.Provider>
  </React.StrictMode>
  )


}



ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);


reportWebVitals();
