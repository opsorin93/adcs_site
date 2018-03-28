import React from "react";
import "./register.scss";

export default class Register extends React.Component {

    render() {
        return (
         <div className="Register">
            <label>E-mail</label>
            <input type="text" placeholder="example@gmail.com"></input>
            <label>Password</label>
            <input type="text" placeholder="Mininum 6 caracters"></input>
            <button name="subject" type="submit" value="Register">Register</button>
            <button name="subject" type="submit" value="Cancel">Cancel</button>
        </div>    


        );
    }

}
