import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sessionOperations } from "../../state/ducks/session";
import "./login.scss";

class Login extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
        password: "",
        email: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
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

  loginUser() {
    this.props.setUsername(this.state.email);
    this.props.displayLoginPopup(false);    
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(user);
  }

  render() {
    const popupState = this.props.loginDisplayed ? "" : "inactive";
    return (
      <div className={`register-popup ${ popupState }`}>
            <div className="input-row">
                <label>E-mail</label>
                <input type="text" placeholder="" onBlur={this.handleEmailChange}></input>
            </div>
            <div className="input-row">
                <label>Password</label>
                <input type="text" placeholder="" onBlur={this.handlePasswordChange}></input>
            </div>
            <div className="input-row">
                <button name="subject" onClick={this.loginUser}>Login</button>
                <button name="subject" onClick={() => this.props.displayLoginPopup(false)}>Cancel</button>
            </div>   
        </div> 
    );
  }
}

Login.propTypes = {
  loginDisplayed: PropTypes.bool.isRequired,
  displayLoginPopup: PropTypes.func.isRequired,  
  loginUser: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  displayLoginPopup: sessionOperations.displayLoginPopup,   
  loginUser: sessionOperations.loginUser,
  setUsername: sessionOperations.setUsername,
};

const mapStateToProps = ( state ) => ( {
  loginDisplayed: state.session.loginDisplayed,
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );