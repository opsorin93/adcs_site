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

         <div className="list">Projects list:</div>
          
           <div className="project1">
                    <h1>1.Ritual Beyond Roots</h1>
                     <ul>
                       <p> A training in Sensory Labyrinth Theatre</p>
                       <p>Sponsored by: Erasmus+</p>
                       <p>Key Action: Mobility of Youth Workers</p>
                       <p>Date: 9<sup>th</sup>-20<sup>th</sup> 2016 </p>
                       <p>Place: Cluj-Napoca, Romania</p>
                    </ul>

                    <p> Ritual Beyond Roots is a creative approach to intercultural dialogue and community building as a 10-day experiential training applied in <a className="linkclass" href ="https://www.birdshapedtheatre.com/labyrinth" >
                    Sensory Labyrinth Theatre </a>(SLT).
                     SLT is a form of live immersive performance in which the audience participates by becoming travelers on a sensorial journey devised by the performers.</p>
                    
                    <p>With 20 participants from 5 partner countries we explored, in a theatrical and sensory way, rituals of our own cultures and of other cultures, as well as traditions and myths. 
                       After this exploration of rituals from different moments in life, we collectively created, constructed and performed in an SLT piece for the local community.</p>
                     
                    <h2>Detalis:</h2>
                        <p>Web: <a className="linkclass" href = "https://www.birdshapedtheatre.com/ritual"> www.birdshapedtheatre.com/ritual</a></p>
                        <p>Youtube: <a className="linkclass" href = "https://www.youtube.com/channel/UCJap1FjUic1v9fXEqMQWnhQ">Bird-Shaped Theatre</a> </p>
              </div>

                <div className="project2">
                 <h1> 2.RISE -for common systems for documentation of youth work and non-formal learning </h1>
                    <ul>
                      <p>A Strategic partnership </p>
                      <p> Programe Funded with the support of the European Comission</p>
                      <p> Date: January 2015 – December 2016</p>
                    </ul> 
                     
                      <p>The project was a Strategic partnership financed by the European Commission and the Erasmus + programme through The Swedish Agency for Youth and Civil Society. 
                          The project was coordinated by KEKS and it involved three other European partners from Ireland, Estonia and Romania.
                          Moreover, a representant of the Helsinki Municipality joined the project’s activities.
                          The purpose of the project was to develop and test a youth work documentation system starting from the Loggboken.</p>
                       <p>The project was implemented between January 2015 and December 2016. During this time we had organised 12 meetings for the two working groups working on the project: the “system development group” and “project management group”.                           
                          The system development group had the tasks of developing the system for documentation of youth work, test it and upgrade it if needed. After the development of the new youth work documentation system there was a testing phase. 
                          During the testing phase, the new system had to be tested and adjustments had to be made if needed. The group had 8 members, two from each partner organization.
                          The project management group had the task of organizing all the practicalities so the project would run smooth and the system development group could do their job as good as possible. The project management group was responsible for organizing meetings, monitoring, risk management, evaluating, reporting etc. 
                          The group had 5 members, one per organization and a fifth who had the role of acting as a bridge between the two working groups.</p>
                        
                        <h2>Details:</h2>
                         <p>Web: < a className="linkclass" href="http://www.keks.se/internationellt-arbete/rise-2/">keks.se/internationellt-arbete/rise-2/</a></p>
                         <p>Facebook: <a className="linkclass" href=" : https://www.facebook.com/RISEstrateg">Facebook.com/RISEstrateg/</a></p>
                  </div>

                <div className="project3">
                 <h1>3.Rainbow of Change</h1>
                      <ul>   
                        <p>A European Voluntary Service (EVS) Programe</p>
                        <p> Funded with the support of the European Comission</p>
                        <p>Date: January – May 2013</p> 
                        <p>Place: Rosario, Argentina</p>
                      </ul>  

                        <p>“Rainbow of Change” was a project developed by us, 8 volunteers, based on our own abilities and born out from the desire of contributing to the needs of the community in Rosario, Argentina. So, there we were, a Rainbow of people that hope to bring changes in ourselves and in the new community we had lived in: Rosario, Argentina.
                            We were brought together by the passion for non-formal education and the enthusiasm of working with youth.
                            The project was an European Voluntary Service (EVS), a programme of the European Commission through the “Youth in Action” Programme.</p>
                         <p1>  What we aimed for:</p1>
                              <li>To stimulate the development of creative thinking and using it as generator of solutions for  the problems of youth from the communities of Rosario.</li>
                          <p1>Objectives:</p1>
                          <ul>
                             <li>To enhance conflict transformation in local communities;</li> 
                             <li>To support youth in choosing a career;</li>
                             <li>To create awareness for youth regarding problems of the environment;</li>
                             <li>To stimulate awareness of youth for a healthy lifestyle.</li>
                           </ul>  
                           
                           <h2>Details:</h2>
                             <p>Web: <a className="linkclass" href=" https://rainbowofchange.wordpress.com/">rainbowofchange.wordpress.com</a></p>
                             <p>Facebook: < a className="linkclass"  href=" https://www.facebook.com/Rainbow-of-Change-270527999716789/">facebook.com/Rainbow-of-Change</a></p>
                    </div> 
                        <div className="newproject">
                          <h1> Stay tuned for more ! </h1>
                        </div>  
                 </div>   

                
                <div className={ `content ${ roState }` }> 
                
                 <div className="list">Lista de proiecte:</div>

                 <div className="project1">
                   <h1>1.Ritual Beyond Roots</h1>
                     <ul>
                      <p> Un curs de pregătire în Sensory Labyrinth Theatre</p>
                      <p>Sponsorizat de: Erasmus+</p>
                      <p> Acționar cheie: Mobility of Youth Workers</p>
                      <p>Data: 9<sup>th</sup>-20<sup>th</sup> 2016 </p>
                      <p>Locația: Cluj-Napoca, Romania</p>
                     </ul>

                    <p> Ritual Beyond Roots a fost o abordare creativă asupra dialogului intercultural și a clădirii comunități în cadrul unui traning de 10 zile aplicat prin <a className="linkclass" href ="https://www.birdshapedtheatre.com/labyrinth" >
                    Sensory Labyrinth Theatre </a>(SLT).
                        SLT este o formă de performanță imersă în direct la care audiența participă prin a deveni călatori în o călatorie 
                        senzorială concepută de interpreți.</p>
                    <p> Împreună cu 20 de participanăi din 5 țări partenere am explorat, în o metodă teatrală și senzorială, ritualuri din propria cultură și culturi străine, de asemenea mituri și tradiți.
                        După această explorare de ritualuri din diferite momente ale vieți, în colectiv am creat, construit și prezentat o piesă SLT pentru comuniate</p>  

                       <h2>Detalii:</h2>
                        <p>Web: <a className="linkclass" href = "https://www.birdshapedtheatre.com/ritual"> www.birdshapedtheatre.com/ritual</a></p>
                        <p>Youtube: <a  className="linkclass" href = "https://www.youtube.com/channel/UCJap1FjUic1v9fXEqMQWnhQ">Bird-Shaped Theatre</a></p>
                   </div>

              <div className="project2">
                <h1> 2.RISE - pentru sistemele comune de documentare asupra muncii tinerilor și educația non-formală </h1>
                    <ul>    
                      <p> Program de Parteneriat Strategic</p>
                      <p> Finanțat de Comisia Europenă</p>
                      <p> Data: Ianuarie 2015 – Decemberie 2016</p>
                    </ul>

                      <p> Proiectul este un Parteneriat Strategic finanțat de Comisia Europeană și programul Erasmu+ prin The Swedish Agency for Youth and Civil Society.
                          Proiectul a fost coordonat de KEKS și implica alți trei parteneri europeni din Irlanda, Estonia și România.
                          Mai mult de atât un reprezenatant al Municipalități din Helsinki a participat la activitățile proiectului.</p>
                      <p> Proiectul a fost implementat in perioada Ianuarie 2015 - Decembrie 2016. În această perioadă am organizat 12 întâlniri pentru cele 2 grupuri care lucrau la proiect: "grupul de dezvoltare a sistemului" și "grupul de management al proiectului".
                          Grupul de dezvoltare a sistemului a avut sarcina de a dezvolta sistemul de documentare a muncii tinerilor, testarea și actualizarea lui. După dezvoltarea  noului sistem de documentare a urmat o fază  de testare.
                          În fază de testare sistemul a fost ajustat unde era nevoie. Grupul a fost format din 8 membri, 2 pentru fiecare organizație parteneră. 
                          Grupul de management al proiectului a avut sarcina de a organiza toate practicitățile astfel ca proiectul să decurga regulat și ca grupul de dezvoltare a sistemului să își efectueze munca cat mai eficient.
                          Grupul de management al proiectului a fost responsabil de organizarea întâlnirilor, monitorizarea, analiza riscurilor, evaluarea, raportarea etc. 
                          Grupul era format dn 5 membri, unul pentru fiecare organizație și al cincelea carea avea rolul de legătură dintre cele două grupuri participante. </p>

                      <h2>Detalii:</h2>
                         <p>Web: < a className="linkclass" href="http://www.keks.se/internationellt-arbete/rise-2/">keks.se/internationellt-arbete/rise-2/</a></p>
                         <p>Facebook: <a className="linkclass" href=" : https://www.facebook.com/RISEstrateg/">Facebook.com/RISEstrateg</a></p>    
                </div>              

                
                <div className="project3">
                 <h1>3.Rainbow of Change</h1>
                       <ul>
                        <p>Un Serviciu de Volunatariat European (ESV)</p> 
                        <p>Finantat cu suportul Comisiei Europene</p> 
                        <p>Data: Ianuarie – Mai 2013</p> 
                        <p>Locația: Rosario, Argentina</p>
                       </ul> 

                        <p>“Rainbow of Change” a fost un proiect dezvoltat de noi, 8 volunatari, bazat pe propriile abilități și născut din dorința de a contribui la nevoile comunității din Rosario, Argentina.
                            Un curcubeu de oameni care speră să aducă o schimbare în ei înșuși și în noua comunitate in care vor locui: Rosario, Argentina.
                            Uniți împreună din pasiune pentru educația non-formală și entuziasmul de a lucra cu tineri.</p>
                        <p1>Scopul nostru a fost:</p1>   
                          <li> Stimularea dezvoltării gândirii creative și folosirea acesteia pentru a genera soluți problemelor cu care tineri se confruntă in comunitatea din Rosario.</li>
                        <p1>Obiective:</p1>
                          <ul>
                            <li>Sporirea transformării conflictelor în comunitățile locale;</li>
                            <li>Sprijinerea tineretul în alegerea unei cariere; </li>
                            <li>Conștientizarea tinerilor referitor la problemele legate de mediu;</li>
                            <li>Conștientizărea tineretului spre a duce un stil de viață sănătos;</li>
                          </ul>

                         <h2>Detalii:</h2>
                             <p>Web: <a className="linkclass" href=" https://rainbowofchange.wordpress.com/">rainbowofchange.wordpress.com</a></p>
                             <p>Facebook: < a className="linkclass" href=" https://www.facebook.com/Rainbow-of-Change-270527999716789/">facebook.com/Rainbow-of-Change</a></p>
                      </div>

                      <div className="newproject">
                        <h1> Lista va continua ! </h1>
                      </div>           
                  
                    </div>   
                <Footer />
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