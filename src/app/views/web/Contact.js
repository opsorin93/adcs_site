import React from "react";
import "./Contact.scss";
import Menu from "./Menu";
import Footer from "./footer";

export default class Contact extends React.Component {

    render() {
        return (
            <div className="container-fluid" >
                <Menu />
                <div className="contact-form">
                    <div className="input-row">
                        <label>Name</label>
                        <input type="text" placeholder=""></input>
                    </div>
                    <div className="input-row">
                        <label>E-mail</label>
                        <input type="text" placeholder=""></input>
                    </div>
                    <div className="input-row">
                        <label>Subject</label>
                        <input type="text" placeholder=""></input>
                    </div>
                    <div className="input-row">
                        <label>Details</label>
                        <textarea type="text" placeholder=""></textarea>
                    </div>
                    <div className="input-row">
                        <button>Send</button> 
                    </div>
                </div>   
                <Footer />
            </div>

        );
    }

}
