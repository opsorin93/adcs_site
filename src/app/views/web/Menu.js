import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sessionOperations } from "../../state/ducks/session";
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

        return (
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
                        <button className="LR">
                            <Link to="/login">{log}
                            </Link>
                        </button>
                        <button className="LR">
                            <Link to="/register">{register}
                            </Link>   
                        </button>

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
