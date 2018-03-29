import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sessionOperations } from "../../state/ducks/session";
import "./Menu.scss";

class Menu extends React.Component {

    render() {
        const aboutUs = this.props.language === "EN" ? "About us" : "Despre noi";
        const project = this.props.language === "EN" ? "Projects" : "Proiecte";
        const services = this.props.language === "EN" ? "Services" : "Servici";
        const support = this.props.langauge === "EN" ? "Support" : "Sustine";
        const contact = this.props.langauge === "EN" ? "Contact" : "Contact";
        const log = this.props.langauge === "EN" ? "Login" :"Intra in cont";
        const register = this.props.langauge === "EN" ? "Register" :"Inregistrare";
        const home = this.props.langauge === "EN" ? "Home" : "Acasa"
        const searchPlaceholder = this.props.langauge === "EN" ? " Search..." : "Cauta...";

        return (
            
                
                <div className="meniu">
                    <img src="assets/logo.png" className="logo" alt="" />
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
                        <Link to="/sustine">{support}
                        </Link>
                    </button>
                    <button className="bar">
                        <Link to="/contact">{contact}
                        </Link>
                    </button>
                    <div className="meniu2">
                    <div className="search">
                        <input type="text" placeholder={ searchPlaceholder } />
                        <button className="search-btn">
                            <img src="assets/search.svg" alt="" className="search-img" />
                        </button>
                    </div>
                    
                    <button className="LR">
                        <Link to="/login">{log}
                        </Link>
                    </button>
                    <button className="LR">
                        <Link to="/register">{register}
                        </Link>   
                    </button>
                    
                    <div className="flags">
                    <button className="flag-btn" onClick={ () => this.props.setLanguage( "RO" ) }>
                        <img className="flag-img" alt="" src="assets/ro.svg" />
                    </button>
                    <button className="flag-btn" onClick={ () => this.props.setLanguage( "EN" ) }>
                        <img className="flag-img" alt="" src="assets/gb.svg" />
                    </button>
                    </div>
               </div>
            </div>
        );
    }
}

Menu.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    setLanguage: sessionOperations.setLanguage,
};

const mapStateToProps = ( state ) => ( {
    language: state.session.language,
} );

export default connect( mapStateToProps, mapDispatchToProps )( Menu );
