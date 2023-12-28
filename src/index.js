import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style.css'
import "./Components/Dashbord.css"
import "./all.min.css"
import "./Components/Home.css"
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>  <App /> </BrowserRouter >);






//ReactDOM.render(<div>Elturkey</div>,document.getElementById("root"))