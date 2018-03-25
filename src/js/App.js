import React from "react";
import ReactDOM from "react-dom";
import {LandingPage, Footer} from "../app/views/web"
import Layout from "./components/Layout";

const app = document.getElementById( "app" );
ReactDOM.render( <div>
<LandingPage />
<Footer/>
</div>, app );
