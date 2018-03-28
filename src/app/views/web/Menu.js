import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
export default class Menu extends React.Component {
    render() {
        const aboutUs = "Despre noi";
        const project = "Proiecte";
        const services = "Servici";
        const support = " Sustine";
        const contact = " Contact";
        const log = "Login";
        const register = "Register";
        const home = "Acasa";

        return (
            <div className="meniu">
                <button className="bar">
                    <Link to="/">{home}
                    </Link>
                 </button>    
                <button className="bar">
                    <Link to="/aboutus">{aboutUs}
                    </Link>
                </button>
                <button className="bar">
                     <Link to="/projects">{project}
                      </Link>
                </button>
                <button className="bar">
                    <Link to="/services">{services}
                    </Link>
                </button>
                <button className="bar">
                    <Link to ="/sustine">{support}
                    </Link>
                </button>
                <button className="bar">
                    <Link to="/contact">{contact}
                     </Link>
                </button>
                <div className="search">
                    <input type="text" placeholder="Cauta.." />
                     <button className="search-btn"/>
                         
                </div>
                <button className="LR"> 
                    <Link to="/login">{log}
                    </Link>
                 </button>
                <button className="LR">
                    <Link to="/register">{register} 
                    </Link>
                </button>
                <button className="Ro"/>
                <button classname="Eng"/>
             </div>
        );
    }
}
