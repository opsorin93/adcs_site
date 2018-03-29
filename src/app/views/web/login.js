import React from "react";
import "./login.scss";

export default class Login extends React.Component {

    render() {
        return (

          <div>
            <label>E-mail</label>
            <input type="text" placeholder="example@gmail.com"></input>
            <label>Password</label>
            <input type="text" placeholder="Minimun 6 caracters"></input>
            <button name="subject" type="submit" value="Login">Login</button>
            <button name="subject" type="submit" value="Cancel">Cancel</button>
            
          </div>





            
        );
    }

}
