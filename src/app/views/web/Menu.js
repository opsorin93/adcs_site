import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        const aboutUs = "Despre noi";
        const project = "Proiecte";
        const services = "Services";
        const support = " Suport";
        const contact = " Contact";
        return (
            <div className="meniu">
                <button className="bar">
                    <Link to="/aboutus">{aboutUs}
                    </Link>
                </button>
                <button className="bar">{project}</button>
                <button className="bar">{services}</button>
                <button className="bar">{support}</button>
                <button className="bar">{contact}</button>
                <div>
                    <input type="text" placeholder="Cauta.." />
                    <button type="button" />
                </div>
                <button className="LR">  Login </button>
                <button className="LR"> Register </button>
            </div>
        );
    }
}
