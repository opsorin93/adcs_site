import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {

    render() {
        const address = "Address";

        return (
            <div className="footer">
                <div className="contact info">Contact</div>
                <div className="info"c>Association for Dialogue, Culture and Sport</div>
                <div className="info">{`${ address }: B-dul Eroilor Nr. 4,
              400129 Cluj-Napoca, Romania`}</div>
                <div className="info"> Tel: +40 720 479 515</div>
                <div className="info"> office@adcs.ro</div>
               
                <div className="social-media">
                    <button className="media-btn">
                        <a href="https://www.facebook.com/AssociationForDialogueCultureAndSport/" >
                            <img src="assets/facebook.svg" alt="" className="media-img" />
                        </a>
                    </button>
                   
                    <button className="media-btn">
                        <a href="https://www.instagram.com/adcs_ro/?hl=ro">
                            <img src="assets/instagram.svg" alt="" className="media-img" />
                        </a>
                    </button>
                </div>
              
                <div className="copyright">©2018 Association for Dialogue, Culture and Sport</div>
            </div>
        );
    }

}
