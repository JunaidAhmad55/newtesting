import React from "react";
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/login/login"
import store from "./store/store"
import { Provider } from "react-redux";


import Sinup from "./components/sinup/sinup"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>

    <Route exact path="/" render={()=>(
      <div>
    <button>
      <Link to="/sinup" >Sinup</Link>
    </button>
    <button>
      <Link to="/login" >Login</Link>
    </button>
    </div>
    )} />
<Route path="/sinup" component={Sinup} />
<Route path="/login" component={Login} />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
