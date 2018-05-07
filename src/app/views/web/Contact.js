import React from "react";
import "./Contact.scss";
import Menu from "./Menu";
import Footer from "./footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";



 class Contact extends React.Component {

    render() {
        const enState = this.props.language === "EN" ? "" : "inactive";
        const roState = this.props.language === "RO" ? "" : "inactive";
        return (
            <div className="container-fluid" >
            <div className="row">
            <Menu />

         <div className={ `content ${ enState }` }>

            <div className="contact-form">
                <div className="input-row">
                    <label>Name</label>
                    <input className="form-input" type="text" placeholder=""></input>
                </div>
                <div className="input-row">
                    <label>E-mail</label>
                    <input className="form-input" type="text" placeholder=""></input>
                </div>
                <div className="input-row">
                    <label>Subject</label>
                    <input className="form-input" type="text" placeholder=""></input>
                </div>
                <div className="input-row">
                    <label>Details</label>
                    <textarea type="text" placeholder=""></textarea>
                </div>
                <div className="input-row">
                    <button className="send">Send</button> 
                     
                </div>
            </div>
           </div>
   
                                  
                <div className={ `content ${ roState }` }>
               
                <div className="contact-form">
                <div className="input-row">
                    <label>Nume</label>
                    <input className="form-input" type="text" placeholder=""></input>
                </div>
                <div className="input-row">
                    <label>E-mail</label>
                    <input className="form-input" type="text" placeholder=""></input>
                </div>
                <div className="input-row">
                    <label>Subiect</label>
                    <input className="form-input" type="text" placeholder=""></input>
                </div>
                <div className="input-row">
                    <label>Detalii</label>
                    <textarea type="text" placeholder=""></textarea>
                </div>
                <div className="input-row">
                     
                    <button className="send">Trimite</button> 
                </div>
            </div>
           </div>

            <Footer />
            </div>
        </div>

        );
    }

}

Contact.propTypes = {
    language: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
    language: state.session.language,
} );

export default connect( mapStateToProps )( Contact );