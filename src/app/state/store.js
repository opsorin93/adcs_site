import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./ducks";
import { apiService, createLogger } from "./middlewares";

export default function configureStore( initialState ) {
    const rootReducer = combineReducers( reducers );

    const composeEnhancers = devToolsInstalled( )
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; // eslint-disable-line no-underscore-dangle

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers( applyMiddleware(
            apiService,
            thunkMiddleware,
            createLogger( true ),
        ) ),
    );
}

function devToolsInstalled( ) {
    return typeof window === "object"
    && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function"; // eslint-disable-line no-underscore-dangle
}
