import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sessionOperations } from "../../state/ducks/session";
import "./register.scss";

class Register extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: "",
            password: "",
            email: "",
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    handleNameChange(e) {
        this.setState( { name: e.target.value } );
    }

    handlePasswordChange(e) {
        this.setState( { password: e.target.value } );
    }

    handleEmailChange(e) {
        this.setState( { email: e.target.value } );
    }

    registerUser() {
        this.props.displayRegisterPopup(false);
        
        const user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
        };
        this.props.registerUser(user);
    }

    render() {
        const popupStatus = this.props.registerDisplayed ? "" : "inactive";
        return (
        <div className={`register-popup ${ popupStatus }`}>
            <div className="input-row">
                <label>E-mail</label>
                <input type="text" placeholder="example@gmail.com" onBlur={this.handleEmailChange}></input>
            </div>
            <div className="input-row">
                <label>Password</label>
                <input type="text" placeholder="Mininum 6 caracters" onBlur={this.handlePasswordChange}></input>
            </div>
            <div className="input-row">
                <label>Name</label>
                <input type="text" placeholder="ex: John Smith" onBlur={this.handleNameChange}></input>
            </div>
            <div className="input-row">
                <button name="subject" value="Register" onClick={this.registerUser}>Register</button>
                <button name="subject" value="Cancel" onClick={() => this.props.displayRegisterPopup(false)}>Cancel</button>
            </div>   
        </div> 
        );
    }

}

Register.propTypes = {
    registerDisplayed: PropTypes.bool.isRequired,
    displayRegisterPopup: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
};
  
const mapDispatchToProps = {
    displayRegisterPopup: sessionOperations.displayRegisterPopup,
    registerUser: sessionOperations.registerUser,
};

const mapStateToProps = ( state ) => ( {
    registerDisplayed: state.session.registerDisplayed,
} );
  
  export default connect( mapStateToProps, mapDispatchToProps )( Register );