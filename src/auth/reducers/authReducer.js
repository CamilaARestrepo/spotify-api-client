import { authTypes } from "../types/authTypes";

export const authReducer = (state={}, action={}) => {
    switch (action.type) {
        case authTypes.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
                errorMessage: null,
            };
        case authTypes.logout:
            return {
                logged: false,
                user: {},
                errorMessage: null,
            };
        case authTypes.errors:
            return {
                ...state,
                errorMessage: action.payload,
            };
        default:
            return console.log("No se ha encontrado el reducer", action.payload);
            break;  
    }
}