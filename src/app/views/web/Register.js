import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sessionOperations } from "../../state/ducks/session";
import "./register.scss";

class Register extends React.Component {

    render() {
        const popupStatus = this.props.registerDisplayed ? "" : "inactive";
        return (
        <div className={`register-popup ${ popupStatus }`}>
            <div className="input-row">
                <label>E-mail</label>
                <input type="text" placeholder="example@gmail.com"></input>
            </div>
            <div className="input-row">
                <label>Password</label>
                <input type="text" placeholder="Mininum 6 caracters"></input>
            </div>
            <div className="input-row">
                <label>Name</label>
                <input type="text" placeholder="ex: John Smith"></input>
            </div>
            <div className="input-row">
                <button name="subject" value="Register">Register</button>
                <button name="subject" value="Cancel" onClick={() => this.props.displayRegisterPopup(false)}>Cancel</button>
            </div>   
        </div> 
        );
    }

}

Register.propTypes = {
    registerDisplayed: PropTypes.bool.isRequired,
    displayRegisterPopup: PropTypes.func.isRequired,
};
  
const mapDispatchToProps = {
    displayRegisterPopup: sessionOperations.displayRegisterPopup,
};

const mapStateToProps = ( state ) => ( {
    registerDisplayed: state.session.registerDisplayed,
} );
  
  export default connect( mapStateToProps, mapDispatchToProps )( Register );