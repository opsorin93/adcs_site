import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "../app/views/web/app";
import configureStore from "../app/state/store";

const reduxStore = configureStore( );
const app = document.getElementById( "app" );
const jsx = (
    <Provider store={ reduxStore }>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render( jsx, app );