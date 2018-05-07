import types from "./types";

const BASE_URL = "localhost:1234";

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

const setUsername = ( username ) => ( {
    type: types.SET_USERNAME,
    payload: { username },
} );

const register = ( user ) => ( {
    type: types.REGISTER_USER,
    meta: {
        async: true,
        path: `${ BASE_URL }/register`,
        method: "POST",
        body: {
            user
        },
    },
});

const login = ( user ) => ( {
    type: types.REGISTER_USER,
    meta: {
        async: true,
        path: `${ BASE_URL }/login`,
        method: "POST",
        body: {
            user
        },
    },
});

export default {
    setLanguage,
    displayRegisterPopup,
    displayLoginPopup,
    register,
    login,
    setUsername,
};
