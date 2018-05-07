import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sessionOperations } from "../../state/ducks/session";
import "./login.scss";

class Login extends React.Component {

  render() {
    const popupState = this.props.loginDisplayed ? "" : "inactive";
    return (
      <div className={`register-popup ${ popupState }`}>
            <div className="input-row">
                <label>E-mail</label>
                <input type="text" placeholder=""></input>
            </div>
            <div className="input-row">
                <label>Password</label>
                <input type="text" placeholder=""></input>
            </div>
            <div className="input-row">
                <button name="subject" value="Login">Login</button>
                <button name="subject" value="Cancel" onClick={() => this.props.displayLoginPopup(false)}>Cancel</button>
            </div>   
        </div> 
    );
  }
}

Login.propTypes = {
  loginDisplayed: PropTypes.bool.isRequired,
  displayLoginPopup: PropTypes.func.isRequired,  
};

const mapDispatchToProps = {
  displayLoginPopup: sessionOperations.displayLoginPopup,   
};

const mapStateToProps = ( state ) => ( {
  loginDisplayed: state.session.loginDisplayed,
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );