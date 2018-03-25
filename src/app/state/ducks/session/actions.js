import types from "./types";

const setLanguage = ( language ) => ( {
    type: types.SET_LANGUAGE,
    payload: { language },
} );

export default {
    setLanguage,
};
