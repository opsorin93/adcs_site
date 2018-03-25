import { combineReducers } from "redux";
import types from "./types";
import { createReducer } from "../../utils";

const languageReducer = createReducer( "EN" )( {
    [ types.SET_LANGUAGE ]: ( state, action ) => action.payload.language,
} );

export default combineReducers( {
    language: languageReducer,
} );
