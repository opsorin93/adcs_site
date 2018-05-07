import types from "./types";

const setLanguage = ( language ) => ( {
    type: types.SET_LANGUAGE,
    payload: { language },
} );

const displayRegisterPopup = ( registerState ) => ( {
    type: types.DISPLAY_REGISTER_POPUP,
    payload: { registerState },
} );

const displayLoginPopup = ( loginState ) => ( {
    type: types.DISPLAY_LOGIN_POPUP,
    payload: { loginState },
} );

const register = ( user ) => ( {

});

const login = ( user ) => ( {

});

export default {
    setLanguage,
    displayRegisterPopup,
    displayLoginPopup
};
