import { combineReducers } from "redux";
import types from "./types";
import { createReducer } from "../../utils";

const languageReducer = createReducer( "RO" )( {
    [ types.SET_LANGUAGE ]: ( state, action ) => action.payload.language,
} );

export default combineReducers( {
    language: languageReducer,
} );
