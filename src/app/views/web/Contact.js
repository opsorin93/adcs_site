import React from "react";
import "./Contact.scss";
import Menu from "./Menu";
import Footer from "./footer";



export default class Contact extends React.Component {

    render() {
        return (
            <div className="container-fluid" >
                <Menu />
                <div></div>   
                <Footer />
            </div>

        );
    }

}
