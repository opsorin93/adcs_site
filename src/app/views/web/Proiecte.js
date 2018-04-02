import React from "react";
import Menu from "./Menu";
import Footer from "./footer";
import "./Proiecte.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Proiecte extends React.Component {

    render() {
        const enState = this.props.language === "EN" ? "" : "inactive";
        const roState = this.props.language === "RO" ? "" : "inactive";
        return (
            <div>
                <Menu/>
                <div className={ `content ${ enState }` }>
                    <h1>Projects list:</h1>
                   <h1>1.Ritual Beyond Roots</h1>
                   <p> A training in Sensory Labyrinth Theatre
                       Erasmus+ Mobility of Youth Workers</p>
                   <p>Date: 9<sup>th</sup>-20<sup>th</sup> 2016 </p>
                   <p>Place: Cluj-Napoca, Romania</p>
                    
                    <p> Ritual Beyond Roots is a creative approach to intercultural dialogue and community building as a 10-day experiential training in applied <a href ="https://www.birdshapedtheatre.com/labyrinth" >
                    Sensory Labyrinth Theatre </a>(SLT).
                     SLT is a form of live immersive performance in which the audience participates by becoming travelers on a sensorial journey devised by the performers.</p>
                    
                    <p>With 20 participants from 5 partner countries we explored, in a theatrical and sensory way, rituals of our own cultures and of other cultures, as well as traditions and myths. 
                       After this exploration of rituals from different moments in life, we collectively created, constructed and performed in an SLT piece for the local community.</p>

                    <p>Detalis:</p>
                        <p>Web: <a href = "https://www.birdshapedtheatre.com/ritual"> www.birdshapedtheatre.com/ritual</a></p>
                        <p>Youtube: <a href = "https://www.youtube.com/channel/UCJap1FjUic1v9fXEqMQWnhQ">Bird-Shaped Theatre</a></p>
 
                     <h2> 2.RISE -for common systems for documentation of youth work and non-formal learning </h2>
                      <p>A Strategic partnership  Programe Funded with the support European Comission</p>
                      <p> Date: January 2015 – December 2016</p>
                     
                      <p>The project was a Strategic partnership financed by the European Commission and the Erasmus + programme through The Swedish Agency for Youth and Civil Society. 
                          The project was coordinated by KEKS and it involved three other European partners from Ireland, Estonia and Romania.
                           Moreover, a representant of the Helsinki Municipality joined the project’s activities.
                            The purpose of the project was to develop and test a youth work documentation system starting from the Loggboken.</p>
                       <p>The project was implemented between January 2015 and December 2016. During this time we had organised 12 meetings for the two working groups working on the project: the “system development group” and “project management group”.                           
                          The system development group had the tasks of developing the system for documentation of youth work, test it and upgrade it if needed. After the development of the new youth work documentation system there was a testing phase. 
                          During the testing phase, the new system had to be tested and adjustments had to be made if needed. The group had 8 members, two from each partner organization.
                          The project management group had the task of organizing all the practicalities so the project would run smooth and the system development group could do their job as good as possible. The project management group was responsible for organizing meetings, monitoring, risk management, evaluating, reporting etc. 
                          The group had 5 members, one per organization and a fifth who had the role of acting as a bridge between the two working groups.</p>
                        
                        <p>Details:</p>
                         <p>Web: < a href="http://www.keks.se/internationellt-arbete/rise-2/">keks.se/internationellt-arbete/rise-2/</a></p>
                         <p>Facebook: <a href=" : https://www.facebook.com/RISEstrateg/">Facebook.com/RISEstrateg/</a></p>

                        <h3>3.Rainbow of Change</h3>
                        <p>A European Voluntary Service (EVS) Programe Funded with the support European Comission</p>
                        <p>Date: January – May 2013</p> 
                        <p>Place: Rosario, Argentina</p>

                        <p>“Rainbow of Change” is a project developed by us, 8 volunteers, based on our own abilities and born out from the desire of contributing to the needs of the community in Rosario, Argentina. So, here we are, a Rainbow of people that hope to bring changes in ourselves and in the new community we had lived in: Rosario, Argentina.
                            We were brought together by the passion for non-formal education and the enthusiasm of working with youth.
                            The project was an European Voluntary Service (EVS), a programme of the European Commission through the “Youth in Action” Programme.</p>
                         <p>  What we aimed for:</p> <p> To stimulate the development of creative thinking and using it as generator of solutions for  the problems of youth from the communities of Rosario.</p>
                          <p>Objectives:</p>
                          <ul>
                             <li>To enhance conflict transformation in local communities;</li> 
                             <li>To support youth in choosing a career;</li>
                             <li>To create awareness for youth regarding problems of the environment;</li>
                             <li>To stimulate awareness of youth for a healthy lifestyle.</li>
                           </ul>  
                           
                           <p>Details:</p>
                             <p>Web: <a href=" https://rainbowofchange.wordpress.com/">rainbowofchange.wordpress.com</a></p>
                             <p>Facebook:< a href=" https://www.facebook.com/Rainbow-of-Change-270527999716789/">facebook.com/Rainbow-of-Change</a></p>

   

 
                           


                       


                
                
                
                
                </div>   
                <div className={ `content ${ roState }` }> </div>
                <Footer/>
            </div>
        );
    }
}

Proiecte.propTypes = {
    language: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
    language: state.session.language,
} );

export default connect( mapStateToProps )( Proiecte );