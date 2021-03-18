import React,{useEffect,useState} from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./login.css"

function login(props){
 return(
     <BrowserRouter>
     <Route path="/login" render={()=>(
         <div>
             login
         </div>
     )} />

</BrowserRouter>
 );   
}
export default login;