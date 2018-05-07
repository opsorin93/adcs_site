import { combineReducers } from "redux";
import types from "./types";
import { createReducer } from "../../utils";

const languageReducer = createReducer( "RO" )( {
    [ types.SET_LANGUAGE ]: ( state, action ) => action.payload.language,
} );

const registerPopupReducer = createReducer( false )( {
    [ types.DISPLAY_REGISTER_POPUP ]: (state, action ) => action.payload.registerState,
} );

const loginPopupReducer = createReducer( false )( {
    [ types.DISPLAY_LOGIN_POPUP ]: ( state, action ) => action.payload.loginState,
} );

export default combineReducers( {
    language: languageReducer,
    loginDisplayed: loginPopupReducer,
    registerDisplayed: registerPopupReducer,
} );
