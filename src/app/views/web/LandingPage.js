import React from "react";
import Menu from "./Menu";
import Footer from "./footer";
import "./LandingPage.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class LandingPage extends React.Component {

    render() {

        const enState = this.props.language === "EN" ? "" : "inactive";
        const roState = this.props.language === "RO" ? "" : "inactive";

        return (
            <div className="container-fluid">
                <div className="row">

                    <Menu />
                    <div className={ `content ${ enState }` }>
                    
                    
                        <div className="title" > Inspiring <b>YOU</b>th to get involved ! </div>
                        <div className="video"> <iframe width="860" height="515" src="https://www.youtube.com/embed/XSgCIU2M_Rw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                         </div>
                    
                    </div>



                    <div className={ `content ${ roState }` }>

                         <div className="title" >Inspiră <b>TINE</b>rii să se implice ! </div>
                         <div className="video"> <iframe width="860" height="515" src="https://www.youtube.com/embed/XSgCIU2M_Rw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                          </div>
                    
                    </div>
                                        
                    <Footer />
                </div>
            </div>
        );
    }
}

LandingPage.propTypes = {
    language: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
    language: state.session.language,
} );

export default connect( mapStateToProps )( LandingPage );