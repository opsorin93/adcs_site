import React from "react";
import Menu from "./Menu";
import Footer from "./footer";
import "./LandingPage.scss";

export default class LandingPage extends React.Component {

    render() {
        return (
            <div >
                <Menu />
                <Footer />
            </div>
        );
    }
}
