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
    <div>
    <Menu/>
           <div className={ `content ${ enState }` }></div>
           <div className={ `content ${ roState }` }>
              
               <p>Pentru a include un proiect în cadrul activităților desfășurate de ADCS, orice grup de inițiativă, organizație, instituție sau companie trebuie să creeze un user pe platforma adcs.ro, iar prin user-ul creat poate să completeze formularul înscriere proiect.</p> 


           
           
           
           
           
           
           
           
           
           
           
           </div> 
     
    <Footer />
    </div>
      
    
);

}
}
Sustine.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
  language: state.session.language,
} );

export default connect( mapStateToProps )( Sustine );













