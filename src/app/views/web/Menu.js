import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sessionOperations } from "../../state/ducks/session";
import Login from "./login";
import Register from "./Register";
import "./Menu.scss";

class Menu extends React.Component {

    render() {
        const support = this.props.language === "EN" ? "Support" : "Sustine";        
        const aboutUs = this.props.language === "EN" ? "About us" : "Despre noi";
        const project = this.props.language === "EN" ? "Projects" : "Proiecte";
        const services = this.props.language === "EN" ? "Services" : "Servicii";
        const contact = this.props.language === "EN" ? "Contact" : "Contact";
        const log = this.props.language === "EN" ? "Login" : "Intra in cont";
        const register = this.props.language === "EN" ? "Register" : "Inregistrare";
        const searchPlaceholder = this.props.language === "EN" ? " Search..." : "Cauta...";
        const popupActive = this.props.loginDisplayed || this.props.registerDisplayed ? "popup-active" : "";
        
        return (
            <div>
            <div className={`screen ${!this.props.registerDisplayed && !this.props.loginDisplayed ? "inactive" : ""}`}>
                <Login />
                <Register />
            </div>
                <div className="meniu">
                    <div className="pages">
                        <button className="bar">
                            <Link to="/">
                            <img alt="" className="home-btn"/>
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
                    </div>
                    <div className="settings-bar">
                        <button className="LR" onClick={ () => this.props.displayLoginPopup( !this.props.loginDisplayed ) }>{log}</button>
                        <button className="LR" onClick={ () => this.props.displayRegisterPopup( !this.props.registerDisplayed ) }>{register}</button>
                        <div className="right-side">
                        <div className="search">
                            <input type="text" placeholder={ searchPlaceholder } />
                            <button className="search-btn">
                                <img src="assets/search.svg" alt="" className="search-img" />
                            </button>
                        </div>
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
            </div>

            </div>
        );
    }
}

Menu.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    registerDisplayed: PropTypes.bool.isRequired,
    loginDisplayed: PropTypes.bool.isRequired,
    displayLoginPopup: PropTypes.func.isRequired,
    displayRegisterPopup: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    setLanguage: sessionOperations.setLanguage,
    displayLoginPopup: sessionOperations.displayLoginPopup,
    displayRegisterPopup: sessionOperations.displayRegisterPopup,
};

const mapStateToProps = ( state ) => ( {
    language: state.session.language,
    loginDisplayed: state.session.loginDisplayed,
    registerDisplayed: state.session.registerDisplayed,
} );

export default connect( mapStateToProps, mapDispatchToProps )( Menu );
