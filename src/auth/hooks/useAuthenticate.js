import { authTypes } from "../types/authTypes";

export const useAutenticate = (dispatch) => {
  const login = ({email, password}) => {
    const action = {
      type: authTypes.login,
      payload: {
        email,
        password,
      },
    };
    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.setItem("logged", true);
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: authTypes.logout,
    };
    localStorage.removeItem("user");
    localStorage.removeItem("logged");
    dispatch(action);
  };

  return { login, logout };
}