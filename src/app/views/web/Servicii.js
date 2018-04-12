import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Servicii.scss";
import Menu from "./Menu";
import Footer from "./footer";


class Servicii extends React.Component{

render(){

  const enState = this.props.language === "EN" ? "" : "inactive";
  const roState = this.props.language === "RO" ? "" : "inactive";

                return(
                            <div>
                            <Menu />
                            <div className={ `content ${ enState }` }>
                            
                            <h1>For organizations/institutions:</h1>
                              <ul>
                                <li>Providing consultancy to organizations/institutions in Cluj-Napoca in order to help them develop strategies on organizational management;</li>
                                <li>Training and supervision of volunteer coordinators from other organizations and institutions on organizational management;</li>
                                <li>Development of own volunteering programs or in partnership with other organizations and institutions of Cluj-Napoca city;</li>
                                <li>Providing a set of useful tools for working with volunteers;</li>
                              </ul>
                            
                              <h2>For volunteers:</h2>
                                <ul>
                                  <li>Informing about volunteer opportunities in the Cluj-Napoca community;</li>
                                  <li>Introduction to volunteering (volunteering law in Romania, volunteer rights and responsibilities, volunteer-to-staff relationship, etc.);</li>
                                  <li>Organizing training sessions for the development of the various professional skills of volunteers;</li>
                                  <li>Involvement in international volunteer projects through the European Voluntary Service. ADCS offers young people (16-30 years old) the opportunity
                                     to carry out international internships for periods of 2 weeks to 1 year, both as sending and hosting organizations;</li>
                                </ul>

                                <h3>For companies:</h3>
                                  <ul>
                                    <li>We have a dynamic and creative team and a wide range of ideas and contacts that we are interested in putting into the goal of giving your
                                       employees the opportunity to volunteer, and therefore to develop, train, teambuild and engage in the community they need;</li>
                                   </ul>   
                            
                            
                            
                            
                            
                            
                            </div>
                            <div className={ `content ${ roState }` }>
                               
                               <h1>Pentru organizații/instituții:</h1>
                                  <ul>
                                    <li>Acordarea de consultanță organizațiilor/instituțiilor din Cluj-Napoca pentru elaborarea de strategii cu privire la managementul organizațional;</li>
                                    <li>Instruirea și supervizarea coordonatorilor de voluntari din alte organizații si instituții privind managementul organizațional;</li>
                                    <li>Dezvoltarea de programe de voluntariat proprii sau in parteneriat cu alte organizații si instituții clujene;</li>
                                    <li>Oferirea unui set de instrumente utile in munca cu voluntarii;</li>
                                  </ul>

                               <h2>Pentru voluntari:</h2>
                                  <ul>
                                    <li>Informarea în legatură cu oportunitățile de voluntariat in comunitatea clujeană;</li>
                                    <li>Introducere în tematica voluntariatului (legea voluntariatului în România, drepturile și responsabilitățile voluntarilor, relația staff-voluntari etc);</li>
                                    <li>Organizarea de sesiuni de instruire pentru dezvoltarea diferitelor abilități profesionale ale voluntarilor;</li>
                                    <li>Implicarea în proiecte internaționale de voluntariat prin intermediul Serviciului European de Voluntariat. ADCS oferă tinerilor (16-30 ani) posibilitatea de a desfăsura stagii internaționale de 
                                      voluntariat pe perioade de la 2 săptamani la 1 an, atât ca organizație de trimitere cât și de găzduire;</li>
                                   </ul>

                                <h3>Pentru firme:</h3>
                                  <ul>
                                    <li>Avem o echipa dinamică și creativă și o paletă largă de idei și contacte pe care suntem interesați să le punem în slujba obiectivului 
                                      de a oferi angajaților firmei dvs. oportunitățile de voluntariat și prin urmare de dezvoltare, formare, teambuilding și implicare în comunitate de care au nevoie;</li>
                                   </ul>   
                                   
                              </div>   
                            <Footer />
                            </div> 



                      );  

          }

}          
Servicii.propTypes = {
    language: PropTypes.string.isRequired,
        };
        
const mapStateToProps = ( state ) => ( {
        language: state.session.language,
        } );
        
export default connect( mapStateToProps )( Servicii );
