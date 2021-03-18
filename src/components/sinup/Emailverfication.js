import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Emailverification(){
    return(
        <BrowserRouter>
            <Route path="/sinup/emailverification" render={()=>(
            <div>
            <input type="text" />
              <button>Verify</button>
              </div>
            )} />
 
</BrowserRouter>

    );
}