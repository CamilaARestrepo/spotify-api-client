import { useReducer } from "react";
import { UserContext } from "./UserContexts";
import { authReducer } from "../reducers/AuthReducer";
import { useAutenticate } from "../hooks/useAuthenticate"


const authInitialState = {
  logged: false,
  user: null,
  errorMessage: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      logged: true,
      errorMessage: null,
      user,
    };
  }
  return authInitialState;
};

export const UserPrivider = ({ children }) => {
    const [userState, dispatch] = useReducer(authReducer, authInitialState, init);
    const {login, logout} = useAutenticate(dispatch);
    return (
        <UserContext.Provider value={{ userState, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
