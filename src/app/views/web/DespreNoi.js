import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Menu from "./Menu";
import Footer from "./footer";

import "./DespreNoi.scss";

class DespreNoi extends React.Component {

    render() {
        const enState = this.props.language === "EN" ? "" : "inactive";
        const roState = this.props.language === "RO" ? "" : "inactive";
        return (
            <div >
                <Menu />
                <div className={ `content ${ enState }` }>
                
                 <div className="first" >
                    <p>  Founded in December 2010, the Association for Dialogue, Culture and Sport (ADCS) supports the development of young leaders and their initiatives. Using non-formal education we bring young people closer to cultural activities, sport and movement, volunteering and dialogue. We work with young, open minded, creative people, who are curious to do things in a “different” way.
                       ADCS wants to encourage people to learn from others and teach others, and inspire them to become more active in their lives and communities.
                    </p>
                    <p>  ADCS dedicated and passionate staff is composed of young and motivated people willing to bring changes in the society and strongly working on their vision. Our organisation has experience in being initiator, coordinator and partner, in several EU programmes. It runs and participates in over 10 EU projects every year.
                    </p>
                 </div>

                 <div className="second">
                    <p> In ADCS, young people can:
                        <ul>
                            <li>Learn more about themselves and discover the great gift of human diversity; </li>
                            <li>Develop personal and professional competences by using non-formal education activities; </li>
                            <li>Experience volunteering as a main tool of approaching the social work;</li>
                            <li>Learn and promote human rights education;</li>
                            <li>Be more aware in choosing a healthy lifestyle;</li>
                            <li>Use sport as a method of education for training youth and youth workers thus promoting grass root sport , physical activity and a healthy lifestyle;</li>
                        </ul>
                    </p>
                </div>

                  <div className="last">  
                    <h> We address to:</h>
                        <p>Young people with ages between 15 and 35 years old (as direct beneficiaries, and a wider age group as indirect ones) who are open to knowledge, international communication and creative education. Young people who have the curiosity and desire to do things differently and to make a change at national and international level in different communities.</p>

                  </div>
                
                </div>

                
                <div className={ `content ${ roState }` }>

                  <div className="first">   
                    <p>Fondată în Decembrie 2010, Asociația pentru Dialog, Cultură și Sport (ADCS) sprijină dezvoltarea tinerilor lideri și inițiativele acestora. Folosind educația non-formală aducem tineri mai aproape de activități culturale, sportive, voluntariat și dialog. Ne adresăm tinerilor, deschiși la minte, creativi, care sunt curioși să facă lucrurile într-un mod "diferit".
                       ADCS dorește să încurajeze oamenii să învețe unii de la alții și să învețe pe alții, și îi inspira să devină mai activi în viața lor și a comunități lor.
                       Echipa ADCS este formată din tineri motivați care doresc să aducă schimbări în societate. Asociația noastră are experiență în a fi inițiator, coordonator și partener, în mai multe programe Europene. Astfel coordonează și/sau participă la peste 10 proiecte europene în fiecare an.
                    </p>
                  </div>


                 <div className="second">
                    <p> În ADCS, tinerii pot:
                        <ul>
                            <li> Să afle mai multe despre ei înșiși și să descopere marele dar al diversității umane;</li>
                            <li> Dezvoltarea competențelor personale și profesionale prin utilizarea activităților de educație non-formală;</li>
                            <li> Experienta voluntariatul ca instrument principal de abordare a activității sociale;</li>
                            <li> Învăța și promova educația pentru drepturile omului;</li>
                            <li> Fi mai conștienți în alegerea unui stil de viață sănătos;</li>
                            <li> Utiliza sportul ca metodă de educație pentru instruirea tinerilor și a tinerilor muncitori, promovând astfel sportul de bază, activitatea fizică și un stil de viață sănătos;</li>
                        </ul>
                    </p>
                  </div>

                 <div className="last">  
                    <h>Ne adresăm:</h>
                        <p>Tinerilor cu vârste cuprinse între 15 și 35 de ani (ca beneficiari direcți, si un grup de vârstă mai mare ca indivizi), care sunt deschise cunoașterii, comunicării internaționale și educației creative, care au curiozitatea și dorința de a face lucrurile în mod diferit și de a face schimbare la nivel național și internațional în diferite comunități.
                        </p>
                  </div>
                </div>

                <Footer />
            </div>

        );
    }
}

DespreNoi.propTypes = {
    language: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
    language: state.session.language,
} );

export default connect( mapStateToProps )( DespreNoi );