import React from "react";
import "./Sustine.scss";
import Menu from "./Menu";
import Footer from "./footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Sustine extends React.Component{

render(){
     const enState = this.props.language === "EN" ? "" : "inactive";
     const roState = this.props.language === "RO" ? "" : "inactive";
  return(
    <div className="container-fluid">
     <div className="row">
    <Menu/>
           <div className={ `content ${ enState }` }>
           
               <h1>Propose a project</h1>
                
                <p>In order to include a project within the ADCS activities, any initiative group, organization,
                   institution or company must create a user on the adcs.ro platform, and through the created user can complete the project enrollment form.</p>

                <p>If you do not have all the details of the project, but you only have an idea and you think we can have a role in shaping your
                   idea or we can contact you with other people with similar initiatives, you can write us using the I HAVE AN IDEA!</p>

                <p>Any project proposal will be verified by the ADCS team to ensure that the proposal is in line with the ADCS objectives.</p>
           
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

           <h1>Propune un proiect</h1>
              
               <p>Pentru a include un proiect în cadrul activităților desfășurate de ADCS, orice grup de inițiativă, organizație, instituție sau companie trebuie să 
                 creeze un user pe platforma adcs.ro, iar prin user-ul creat poate să completeze formularul înscriere proiect.</p> 
                
                <p>Dacă nu ai toate detaliile proiectului, ci ai doar o idee și crezi că putem să avem un rol în conturarea ideii 
                  tale sau te putem pune în legătura cu alte persoane cu inițiative similare, poți să ne scrii folosind formularul AM O IDEE!.</p>

                <p>Orice propunere de proiect va fi verificată de echipa ADCS pentru a ne asigura că propunerea este în conformitate cu obiectivele ADCS.</p>

        <div className={`support-form ${this.props.username === "" ? "inactive" : ""}`}>
              <div className="contact-form">
                    <div className="input-row">
                        <label >Name</label>
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
       </div> 
     
    <Footer />
    </div>
    </div>
      
    
);

}
}
Sustine.propTypes = {
  language: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
  language: state.session.language,
  username: state.session.username,
} );

export default connect( mapStateToProps )( Sustine );













