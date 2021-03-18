import React,{useEffect,useState} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./sinup.css"
import { connect } from "react-redux";
import Emailverification from "./Emailverfication";
import {sinup} from "../../store/actions/sinupaction" 

function Sinup(props) {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

function onChangeData(evt){
  switch (evt.target.name) {
    case "email":
      setemail(evt.target.value);
      break;

    case "password":
      setpassword(evt.target.value);
      break;
    case "name":
      setname(evt.target.value);
      break;
  
  }
}

  return (
    <BrowserRouter>
   <Route exact
        path="/sinup"
        render={() => (
          <div className="login_most_main_div">
            <div className="login_main_div">
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();

                 let data={
                   name,
                   email,
                   password
                  };
                      props.sinup(data);
                  // store.dispatch({
                  //     type:"USER_BANRAH",
                  //     data:d,
                  // })

                 // let formData = new FormData();
                //   formData.append("name", name);
                //   formData.append("email", email);
                //   formData.append("password", password);
                
                //  formData.append("userFile", file);

                 // props.signup(d, props.history);

                  // axios.post("/signup", {
                  //     email,
                  //     name,
                  //     password

                  // }).then((res) => {
                  //   console.log(res);
                  // })
                }}
              >
                <div className="input_divs">
                  <span style={{ color: "white", fontSize: "x-large" }}>
                    SinUp
                  </span>
                </div>
                <div className="input_divs">
                  <input
                    className="login_input"
                    placeholder="Name"
                    name="name"
                    onChange={onChangeData}
                  />
                </div>

                <div className="input_divs">
                  <input
                    className="login_input"
                    placeholder="Email"
                    name="email"
                    onChange={onChangeData}
                  />
                </div>

                <div className="input_divs">
                  <input
                    className="login_input"
                    placeholder="Password"
                    name="password"
                    onChange={onChangeData}
                  />
                </div>
               

                <div className="input_divs">
                  <button className="login_button">  SinUp </button>
                </div>
              </form>
            </div>
          </div>
        )}
      />

 <Route path="/sinup/emailverification" component={Emailverification} />
    </BrowserRouter>
  );
}

export default connect(
  (store) => {
    return store;
  },
  { sinup }
)(Sinup);
